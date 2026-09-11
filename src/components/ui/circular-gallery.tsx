import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Compass } from 'lucide-react';

export interface GalleryItem {
  common: string;
  binomial?: string;
  photo: {
    url: string;
    text?: string;
    pos?: string;
    by?: string;
  };
  id?: string;
  badge?: string;
  tag?: string;
  detail?: string;
  zone?: string;
  data?: any;
}

export interface CircularGalleryProps {
  items: GalleryItem[];
  radius?: number;
  bend?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onSelectItem?: (item: GalleryItem) => void;
  className?: string;
}

export const CircularGallery: React.FC<CircularGalleryProps> = ({
  items,
  radius: customRadius,
  bend = 0,
  autoRotate = true,
  autoRotateSpeed = 0.04,
  onSelectItem,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [responsiveRadius, setResponsiveRadius] = useState(670);
  const [cardDimensions, setCardDimensions] = useState({ width: 250, height: 355 });

  // Dedicated drag vs click state tracker
  const pointerState = useRef({
    isDown: false,
    startX: 0,
    startY: 0,
    startRotation: 0,
    hasDragged: false,
    pointerId: -1,
  });

  const total = items.length;
  // Ensure minimum angular separation for visible gaps
  const baseAngleStep = total > 0 ? 360 / total : 0;
  const angleStep = total < 8 ? Math.max(38, baseAngleStep) : baseAngleStep;

  // Responsive radius & card sizing with clear gaps across full-screen widths
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setResponsiveRadius(customRadius || 450);
        setCardDimensions({ width: 185, height: 260 });
      } else if (width < 1024) {
        setResponsiveRadius(customRadius || 550);
        setCardDimensions({ width: 220, height: 310 });
      } else if (width < 1536) {
        setResponsiveRadius(customRadius || 720);
        setCardDimensions({ width: 255, height: 360 });
      } else {
        setResponsiveRadius(customRadius || 840);
        setCardDimensions({ width: 270, height: 380 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [customRadius]);

  // Gentle auto-rotation when idle
  useEffect(() => {
    if (!autoRotate || isHovered || total <= 1) return;

    let animFrameId: number;
    const step = () => {
      if (!pointerState.current.isDown) {
        setRotation((prev) => (prev - autoRotateSpeed) % 360);
      }
      animFrameId = requestAnimationFrame(step);
    };

    animFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrameId);
  }, [autoRotate, isHovered, autoRotateSpeed, total]);

  // Active item closest to front center (0 degrees)
  const activeIndex = useMemo(() => {
    if (total === 0) return 0;
    let bestIndex = 0;
    let minDistance = Infinity;

    items.forEach((_, idx) => {
      const rawAngle = (idx * angleStep + rotation) % 360;
      const normalizedAngle = ((rawAngle + 540) % 360) - 180;
      const distance = Math.abs(normalizedAngle);
      if (distance < minDistance) {
        minDistance = distance;
        bestIndex = idx;
      }
    });

    return bestIndex;
  }, [rotation, angleStep, total, items]);

  // Rotate to specific item index
  const rotateToIndex = useCallback(
    (index: number) => {
      const targetAngle = -index * angleStep;
      let currentMod = rotation % 360;
      if (currentMod > 180) currentMod -= 360;
      if (currentMod < -180) currentMod += 360;

      let targetMod = targetAngle % 360;
      if (targetMod > 180) targetMod -= 360;
      if (targetMod < -180) targetMod += 360;

      let diff = targetMod - currentMod;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;

      setRotation((prev) => prev + diff);
    },
    [angleStep, rotation]
  );

  const handleNext = () => {
    setRotation((prev) => prev - angleStep);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + angleStep);
  };

  // Pointer event handlers for the stage
  const handleStagePointerDown = (e: React.PointerEvent) => {
    pointerState.current = {
      isDown: true,
      startX: e.clientX,
      startY: e.clientY,
      startRotation: rotation,
      hasDragged: false,
      pointerId: e.pointerId,
    };
  };

  const handleStagePointerMove = (e: React.PointerEvent) => {
    if (!pointerState.current.isDown) return;
    const deltaX = e.clientX - pointerState.current.startX;
    const deltaY = e.clientY - pointerState.current.startY;

    // Only activate drag after moving more than 6px
    if (!pointerState.current.hasDragged && Math.hypot(deltaX, deltaY) > 6) {
      pointerState.current.hasDragged = true;
      try {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }
    }

    if (pointerState.current.hasDragged) {
      const sensitivity = 0.22;
      setRotation(pointerState.current.startRotation + deltaX * sensitivity);
    }
  };

  const handleStagePointerUp = (e: React.PointerEvent) => {
    if (pointerState.current.isDown) {
      if (pointerState.current.hasDragged) {
        try {
          (e.currentTarget as HTMLElement).releasePointerCapture(pointerState.current.pointerId);
        } catch {
          // Safe fallback
        }
        // Brief timeout before resetting drag flag to prevent click triggering on drag release
        setTimeout(() => {
          pointerState.current.hasDragged = false;
        }, 60);
      }
      pointerState.current.isDown = false;
    }
  };

  // Reliable card click handler: shows card details modal immediately!
  const triggerCardSelection = (item: GalleryItem, idx: number, e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (pointerState.current.hasDragged) {
      return;
    }

    rotateToIndex(idx);
    if (onSelectItem) {
      onSelectItem(item);
    }
  };

  // Mouse Wheel navigation
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      setRotation((prev) => prev - e.deltaX * 0.15);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none flex flex-col items-center justify-center py-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onWheel={handleWheel}
    >
      {/* 3D Cylindrical Stage */}
      <div
        className="relative w-full h-[375px] sm:h-[410px] md:h-[445px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={handleStagePointerDown}
        onPointerMove={handleStagePointerMove}
        onPointerUp={handleStagePointerUp}
        onPointerCancel={handleStagePointerUp}
        style={{
          perspective: '1200px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        {/* 
          The 3D Rotating Ring:
          Positioned with translateZ(-R) so front cards sit at Z = 0 (exact 1:1 scale, never blown up)
        */}
        <div
          className="relative w-0 h-0 transition-transform duration-75 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${responsiveRadius}px) rotateY(${rotation}deg) rotateX(${bend}deg)`,
          }}
        >
          {items.map((item, idx) => {
            const itemAngle = idx * angleStep;
            const rawAngle = (itemAngle + rotation) % 360;
            const normalizedAngle = ((rawAngle + 540) % 360) - 180;
            const distanceFromFront = Math.abs(normalizedAngle);
            const isFront = distanceFromFront < angleStep * 0.5;
            // Render cards across full-screen width with graceful peripheral bounds
            const isVisible = distanceFromFront <= 96;

            // Keep all visible cards bright and crisp like standard showcase cards
            const opacity = isVisible ? 1 : 0;
            const brightness = isVisible ? (isFront ? 1.08 : 1.02) : 0.4;

            return (
              <div
                key={item.id || idx}
                onClick={(e) => triggerCardSelection(item, idx, e)}
                className={`absolute top-0 left-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 active:scale-98 ${
                  isFront
                    ? 'ring-2 ring-emerald-400 shadow-2xl shadow-emerald-500/40 z-30'
                    : 'border border-zinc-700 shadow-xl shadow-black/60 hover:border-emerald-500/80 z-10'
                }`}
                style={{
                  width: `${cardDimensions.width}px`,
                  height: `${cardDimensions.height}px`,
                  transform: `translate(-50%, -50%) rotateY(${itemAngle}deg) translateZ(${responsiveRadius}px)`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  opacity: opacity,
                  filter: `brightness(${brightness})`,
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
                title={`Click to view details for ${item.common}`}
              >
                {/* Compact Card Content */}
                <div className="relative w-full h-full bg-[#141720] flex flex-col justify-between group overflow-hidden">
                  {/* Photo Layer */}
                  <div className="relative w-full h-full">
                    <img
                      src={item.photo.url}
                      alt={item.common}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover brightness-[1.10] contrast-[1.04] transition-transform duration-500 group-hover:scale-108"
                      style={{
                        objectPosition: item.photo.pos || 'center',
                      }}
                    />

                    {/* Bright & clear: only shades the bottom text zone and top badge strip, keeping the photo vibrant */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-32% to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      {item.badge ? (
                        <span className="bg-emerald-500 text-black text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded shadow">
                          {item.badge}
                        </span>
                      ) : (
                        <span className="bg-black/75 backdrop-blur-md border border-zinc-800 text-zinc-300 text-[9px] font-medium px-1.5 py-0.5 rounded">
                          {item.zone || `#${String(idx + 1).padStart(2, '0')}`}
                        </span>
                      )}

                      {item.tag && (
                        <span className="bg-black/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[9px] font-semibold px-1.5 py-0.5 rounded">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Bottom Metadata & Click Action */}
                    <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 flex flex-col justify-end text-left space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-white font-display leading-tight line-clamp-1 group-hover:text-emerald-300 transition-colors">
                        {item.common}
                      </h3>

                      {item.binomial && (
                        <p className="text-[11px] font-mono text-emerald-400/90 line-clamp-1">
                          {item.binomial}
                        </p>
                      )}

                      {/* Clickable details action button */}
                      <button
                        type="button"
                        onClick={(e) => triggerCardSelection(item, idx, e)}
                        className="w-full mt-2 py-1.5 px-3 rounded-full bg-[#181B22]/90 hover:bg-emerald-500 hover:text-black text-emerald-400 border border-emerald-500/35 hover:border-emerald-500 text-[11px] font-semibold tracking-wide flex items-center justify-center space-x-1.5 transition-all shadow-sm active:scale-95"
                      >
                        <span>View Details</span>
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ambient Ring Glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl" />
        </div>
      </div>

      {/* Navigation Controls: Arrow buttons beside the dots */}
      <div className="w-full max-w-xl px-4 mt-3 flex flex-col items-center">
        <div className="flex items-center justify-center space-x-3 sm:space-x-4">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="w-8 h-8 rounded-full bg-[#141720] border border-zinc-800 text-zinc-300 hover:text-white hover:border-emerald-500/60 hover:bg-zinc-800 active:scale-95 transition-all shadow-md flex items-center justify-center"
            aria-label="Previous equipment card"
            title="Previous equipment"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-1.5 px-1 py-1 overflow-x-auto max-w-[280px] sm:max-w-none">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => rotateToIndex(idx)}
                className={`transition-all duration-300 rounded-full shrink-0 ${
                  activeIndex === idx
                    ? 'w-5 h-1.5 bg-emerald-400 shadow-sm shadow-emerald-400/50'
                    : 'w-1.5 h-1.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Jump to ${items[idx].common}`}
                title={items[idx].common}
              />
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="w-8 h-8 rounded-full bg-[#141720] border border-zinc-800 text-zinc-300 hover:text-white hover:border-emerald-500/60 hover:bg-zinc-800 active:scale-95 transition-all shadow-md flex items-center justify-center"
            aria-label="Next equipment card"
            title="Next equipment"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Informative Hint */}
        <p className="text-[11px] text-zinc-500 mt-2 font-mono flex items-center space-x-1.5">
          <Compass className="w-3 h-3 text-emerald-400/70" />
          <span>Click any card to inspect full technical specifications</span>
        </p>
      </div>
    </div>
  );
};
