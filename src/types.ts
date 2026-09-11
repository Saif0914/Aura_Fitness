export type PageView = 'club' | 'instruments';

export type EquipmentCategory =
  | 'all'
  | 'strength'
  | 'cardio'
  | 'functional'
  | 'recovery';

export interface EquipmentItem {
  id: string;
  name: string;
  brand: string;
  category: EquipmentCategory;
  categoryLabel: string;
  image: string;
  specs: string[];
  targetedMuscles: string;
  description: string;
  facilityZone: string;
  quantity: number;
  highlightTag?: string;
}

export interface FacilityZone {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  areaSqFt: string;
  equipmentCount: string;
  keyFeatures: string[];
}

export interface Trainer {
  id: number;
  name: string;
  role: string;
  specialty: string;
  certifications: string[];
  image: string;
  experience: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  achievement: string;
  avatar: string;
}
