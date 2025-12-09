// Morni Site Types

export interface Product {
  id: string;
  title: string;
  designer: string;
  price: number;
  image: string;
  collection?: string;
  href: string;
}

export interface Story {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface Creator {
  id: string;
  name: string;
  image: string;
  role?: string;
}

export interface Fabric {
  id: string;
  name: string;
  material: string;
  image: string;
}

export interface TimelineStep {
  number: number;
  icon: string;
  title: string;
  description: string;
  days: string;
}

export interface Pillar {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  href: string;
}
