// Morni Site Mock Data
import type {
  Product,
  Story,
  Creator,
  Fabric,
  TimelineStep,
  Pillar,
  NavLink,
} from "./types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Co-Create", href: "/co-creation" },
  { label: "Atelier", href: "/shop" },
  { label: "B2B", href: "/brand-partners" },
  { label: "Materials", href: "/fabrics" },
];

export const products: Product[] = [
  {
    id: "1",
    title: "Silk Kurta Set",
    designer: "Priya Sharma",
    price: 1555,
    image: "/images/products/silk-kurta.webp",
    collection: "Rooted",
    href: "/products/silk-kurta-set",
  },
  {
    id: "2",
    title: "Handwoven Saree",
    designer: "Lakshmi Devi",
    price: 888,
    image: "/images/products/handwoven-saree.webp",
    collection: "Rooted",
    href: "/products/handwoven-saree",
  },
  {
    id: "3",
    title: "Embroidered Jacket",
    designer: "Raj Patel",
    price: 444,
    image: "/images/products/embroidered-jacket.webp",
    collection: "Rooted",
    href: "/products/embroidered-jacket",
  },
  {
    id: "4",
    title: "Linen Tunic",
    designer: "Anita Gupta",
    price: 555,
    image: "/images/products/linen-tunic.webp",
    href: "/products/linen-tunic",
  },
  {
    id: "5",
    title: "Block Print Dress",
    designer: "Maya Singh",
    price: 666,
    image: "/images/products/block-print-dress.webp",
    href: "/products/block-print-dress",
  },
  {
    id: "6",
    title: "Wool Shawl",
    designer: "Dev Kumar",
    price: 333,
    image: "/images/products/wool-shawl.webp",
    href: "/products/wool-shawl",
  },
];

export const stories: Story[] = [
  { id: "1", name: "Anhad", image: "/images/stories/anhad.webp", href: "https://stories.mymorni.ai/anhad" },
  { id: "2", name: "Nick", image: "/images/stories/nick.webp", href: "https://stories.mymorni.ai/nick" },
  { id: "3", name: "Surya", image: "/images/stories/surya.webp", href: "https://stories.mymorni.ai/surya" },
  { id: "4", name: "Evan", image: "/images/stories/evan.webp", href: "https://stories.mymorni.ai/evan" },
  { id: "5", name: "Emily", image: "/images/stories/emily.webp", href: "https://stories.mymorni.ai/emily" },
  { id: "6", name: "Kyle", image: "/images/stories/kyle.webp", href: "https://stories.mymorni.ai/kyle" },
  { id: "7", name: "Shivali", image: "/images/stories/shivali.webp", href: "https://stories.mymorni.ai/shivali" },
  { id: "8", name: "Hardik", image: "/images/stories/hardik.webp", href: "https://stories.mymorni.ai/hardik" },
  { id: "9", name: "Clau", image: "/images/stories/clau.webp", href: "https://stories.mymorni.ai/clau" },
  { id: "10", name: "Alexia", image: "/images/stories/alexia.webp", href: "https://stories.mymorni.ai/alexia" },
  { id: "11", name: "Raagini", image: "/images/stories/raagini.webp", href: "https://stories.mymorni.ai/raagini" },
];

export const creators: Creator[] = [
  { id: "1", name: "Artisan 1", image: "/images/creators/creator-1.webp" },
  { id: "2", name: "Artisan 2", image: "/images/creators/creator-2.webp" },
  { id: "3", name: "Artisan 3", image: "/images/creators/creator-3.webp" },
  { id: "4", name: "Artisan 4", image: "/images/creators/creator-4.webp" },
  { id: "5", name: "Artisan 5", image: "/images/creators/creator-5.webp" },
  { id: "6", name: "Artisan 6", image: "/images/creators/creator-6.webp" },
  { id: "7", name: "Artisan 7", image: "/images/creators/creator-7.webp" },
  { id: "8", name: "Artisan 8", image: "/images/creators/creator-8.webp" },
  { id: "9", name: "Artisan 9", image: "/images/creators/creator-9.webp" },
  { id: "10", name: "Artisan 10", image: "/images/creators/creator-10.webp" },
  { id: "11", name: "Artisan 11", image: "/images/creators/creator-11.webp" },
  { id: "12", name: "Artisan 12", image: "/images/creators/creator-12.webp" },
];

export const fabrics: Fabric[] = [
  { id: "1", name: "Corduroy", material: "Organic", image: "/images/fabrics/corduroy-organic.webp" },
  { id: "2", name: "Corduroy", material: "Wool", image: "/images/fabrics/corduroy-wool.webp" },
  { id: "3", name: "Corduroy", material: "Cotton", image: "/images/fabrics/corduroy-cotton.webp" },
  { id: "4", name: "Corduroy", material: "Bamboo", image: "/images/fabrics/corduroy-bamboo.webp" },
  { id: "5", name: "Silk", material: "Mulberry", image: "/images/fabrics/silk-mulberry.webp" },
  { id: "6", name: "Linen", material: "Belgian", image: "/images/fabrics/linen-belgian.webp" },
];

export const timelineSteps: TimelineStep[] = [
  {
    number: 1,
    icon: "/icons/v-tl-consult.png",
    title: "Consultation",
    description: "Share your vision with our design team. We'll discuss styles, fabrics, and inspirations.",
    days: "Day 1",
  },
  {
    number: 2,
    icon: "/icons/v-tl-design.png",
    title: "Design",
    description: "Our designers create custom sketches and patterns based on your input.",
    days: "Days 2-7",
  },
  {
    number: 3,
    icon: "/icons/v-tl-fabric.png",
    title: "Fabric Selection",
    description: "Choose from our curated library of sustainable, ethically-sourced fabrics.",
    days: "Days 8-12",
  },
  {
    number: 4,
    icon: "/icons/v-tl-production.png",
    title: "Production",
    description: "Master artisans handcraft your garment using traditional techniques.",
    days: "Days 13-38",
  },
  {
    number: 5,
    icon: "/icons/v-tl-delivery.png",
    title: "Delivery",
    description: "Your custom piece is carefully packaged and delivered to your doorstep.",
    days: "Days 39-44",
  },
];

export const pillars: Pillar[] = [
  {
    icon: "/icons/pillar-craft.png",
    title: "Craftsmanship",
    description: "Every piece is handcrafted by master artisans with generations of expertise.",
  },
  {
    icon: "/icons/pillar-sustain.png",
    title: "Sustainability",
    description: "We use only natural, ethically-sourced materials and eco-friendly processes.",
  },
  {
    icon: "/icons/pillar-story.png",
    title: "Storytelling",
    description: "Each garment carries the story of its maker and the culture it represents.",
  },
  {
    icon: "/icons/pillar-connect.png",
    title: "Connection",
    description: "We bridge the gap between you and the artisans who bring your vision to life.",
  },
];
