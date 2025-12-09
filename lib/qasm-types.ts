// ColorCodedQASM Type Definitions

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';
export type Availability = 'in_stock' | 'sold_out' | 'pre_order' | 'made_to_order';

export interface Artifact {
  id: string;
  title: string;
  slug: string;
  collection: string;
  collectionSlug: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  sizes: Size[];
  availability: Availability;
  description: string;
  materials: string[];
  techniques: string[];
  artisan?: string;
  leadTime?: string;
  featured?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  artifacts: Artifact[];
}

export interface Artisan {
  id: string;
  name: string;
  craft: string;
  region: string;
  image: string;
  bio: string;
  quote?: string;
  techniques: string[];
  yearsOfExperience?: number;
}

export interface ProtocolStep {
  number: number;
  icon: string;
  title: string;
  description: string;
  days: string;
}

export interface JournalPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  publishedAt: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: string;
  artifact?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
