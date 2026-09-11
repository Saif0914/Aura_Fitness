# AURA FITNESS — Athletic Performance & Wellness Club

![Aura Fitness](./Aura_Fitness.png)

A modern, high-performance web application designed for **AURA FITNESS**, an elite 30,000 sq. ft. athletic training facility, biomechanical performance center, and recovery sanctuary. Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Motion**.

---

## 🌟 Overview & Philosophy

**AURA FITNESS** bridges high-tier Olympic athletic training with luxury restorative wellness. The application provides an immersive digital experience for prospective athletes, current members, and VIP tour guests to explore cutting-edge equipment, certified coaching staff, and club amenities.

### Core Experience Principles
- **Atmospheric Dark Aesthetics**: Sophisticated obsidian-and-emerald palette (`#090A0F` dark canvas with `#10B981` accents) tailored for modern athletic prestige.
- **Zero Layout Shifts**: Fixed-height hero transitions and responsive containers preventing jumping during slide changes.
- **Tactile Micro-Interactions**: Rounded pill controls, subtle backdrop blurs, crisp SVG iconography via Lucide, and fluid transitions powered by `motion/react`.

---

## 🚀 Key Features & Modules

### 1. Hero Stage & Core Metrics
- **Dynamic Photography Showcase**: High-definition slide transitions highlighting Olympic platforms, Hammer Strength biomechanical stations, and recovery suites.
- **Centered Typography & Controls**: Streamlined headline hierarchy with centered action buttons for exploring gear and booking facility tours.
- **Side Arrow Navigation**: Left and right floating navigation controls with backdrop blur and smooth hover animations.
- **Facility Live Metrics Bar**: Instant access to key club specifications:
  - `30,000` Sq. Ft. Training Floor
  - `140+` Precision Machines & Racks
  - `8` Olympic Lifting Platforms
  - `24/7` Biometric Member Access

### 2. Instruments & Facilities Showcase
- **3D Interactive Circular Gallery**: Visual 3D carousel allowing users to browse through flagship equipment (Eleiko Olympic Racks, Woodway Curve Treadmills, Plunge Pro Tubs, Hammer Strength Incline Presses).
- **Comprehensive Equipment Spec Modals**: Detailed modal dialogs revealing:
  - Mechanical dimensions, weight capacities, and steel gauge.
  - Biomechanical focus and target muscle groups.
  - Certified coach guidance and usage tips.
- **Categorized Performance Zones**:
  - *Biomechanical Strength Arena* (Olympic lifting, custom selectorized steel).
  - *Metabolic & Endurance Deck* (Air bikes, curved treadmills, magnetic rowers).
  - *Athletic Sprint Turf & Combat* (45-yard sled turf, heavy bags, plyometrics).
  - *Hydrotherapy Sanctuary* (Cold plunge 39°F, infrared dry sauna 195°F).

### 3. Biomechanical Coaching Staff Directory
- Profiles of elite coaches, physical therapists, and Olympic lifting specialists.
- Direct listing of credentials (CSCS, USAW-L2, DPT, FMS-II).
- Direct call-to-action for scheduling biomechanical assessments.

### 4. Verified Member Testimonials
- Athlete testimonial slider featuring collegiate competitors, marathon runners, and executives.
- Verification badges and training discipline tags.

### 5. VIP Facility Tour Booking Modal
- Seamless modal form to book complimentary 1-day testing passes and private walkthroughs.
- Custom selections for training goals and preferred times of day.

### 6. Concierge & Inquiry Hub
- Direct messaging channel for corporate inquiries and private locker suites.
- Operating schedules for concierge desks and 24/7 keyless member access.
- Embedded contact channels and quick navigation.

---

## 🛠️ Tech Stack & Architecture

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component-driven user interface and reactive state management |
| **TypeScript** | Strict end-to-end type safety across components and data models |
| **Vite** | Fast development server and optimized production bundler |
| **Tailwind CSS v4** | Utility-first styling with modern CSS variables |
| **Motion** (`motion/react`) | Hardware-accelerated animations, modal entrances, and slide transitions |
| **Lucide React** | Consistent, accessible icon system |

---

## 📁 Directory Structure

```text
├── public/                     # Static assets and browser favicons
├── src/
│   ├── assets/                 # Brand imagery and custom generated logos
│   ├── components/             # Modular UI components
│   │   ├── ui/
│   │   │   └── circular-gallery.tsx # 3D interactive equipment carousel
│   │   ├── AboutSection.tsx    # Facility specifications and air turnover metrics
│   │   ├── ContactSection.tsx  # Concierge message form and location details
│   │   ├── EquipmentModal.tsx  # Technical specification dialog for machinery
│   │   ├── FeaturesSection.tsx # Performance zone summaries
│   │   ├── Footer.tsx          # Operating hours, brand links, and navigation
│   │   ├── Header.tsx          # Fixed frosted glass header with branded logo
│   │   ├── Hero.tsx            # Hero slider with centered layout and side arrows
│   │   ├── InstrumentsPage.tsx # Dedicated equipment catalog and spec breakdown
│   │   ├── TestimonialsSection.tsx # Athlete review slider
│   │   ├── TourModal.tsx       # VIP tour booking modal
│   │   └── TrainersSection.tsx # Performance coach directory
│   ├── data/                   # Structured mock data for gear, staff, and reviews
│   ├── types.ts                # TypeScript interfaces and navigation enums
│   ├── App.tsx                 # Root layout and view controller
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles and font declarations
├── metadata.json               # Platform configuration and app capabilities
├── package.json                # Project dependencies and build scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite bundler configuration
```

---

## 💻 Getting Started & Local Development

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm** or **bun** / **yarn**

### Installation

1. **Clone or open the repository**:
   ```bash
   git clone <repository-url>
   cd fitness
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will run locally at `http://localhost:3000`.

### Available Scripts

- `npm run dev` — Launches the Vite development server on port 3000.
- `npm run build` — Compiles TypeScript and creates an optimized production bundle in `dist/`.
- `npm run lint` — Runs TypeScript type-checking without emitting files (`tsc --noEmit`).

---

## 📱 Responsive Design & Accessibility

- **Mobile First**: All touch targets meet or exceed 44px minimum touch boundaries.
- **Adaptive Layouts**: Responsive navigation drawer on mobile viewports with fluid desktop header.
- **High Contrast**: Form inputs, buttons, and text layers adhere to WCAG AA contrast standards.
- **Performance Optimized**: Lazy-loaded image assets and smooth CSS transitions.

---

## 📄 License & Credits

Built for **AURA Athletics & Performance Club**. All rights reserved.
