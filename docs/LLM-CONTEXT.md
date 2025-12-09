# Morni Site Clone - LLM Context Document

> Use this document to provide context when asking an LLM to clone or recreate the Morni website.

## Site Overview

**Morni** (mymorni.com) is a custom clothing platform connecting individuals and brands with design houses across South Asia. The site emphasizes:

- **Co-creation**: Customers design custom garments collaboratively with artisans
- **Sustainability**: Focus on natural fabrics and ethical production
- **Artisanal craft**: South Asian craftsmanship and traditional techniques
- **Storytelling**: Each piece has a story, each customer has a journey

### Brand Tagline
"Be Your Own Brand" / "Forget mass production. Your story deserves center stage."

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom fonts
- **Images**: Next.js Image component with WebP optimization
- **Hosting**: Likely Vercel (Next.js native)

## Site Architecture

```
/                    - Homepage (hero, co-creation intro, stories, products, B2B, journal)
/co-creation         - 5-step process explanation (44-day timeline)
/atelier             - Shop/product catalog (redirects to /shop or similar)
/brand-partners      - B2B landing page
/fabrics             - Fabric library (video hero, fabric types, techniques)
/about               - Company story, four pillars
/journal             - Blog/articles
/stories             - External: stories.mymorni.ai (customer testimonials)
```

## Key Design Characteristics

### Visual Identity

1. **Color Palette**
   - Primary background: Light gray (#f3f3f3)
   - Text: Black on light backgrounds
   - Accent: Amber-600 (icons, decorative elements)
   - Secondary accents: Teal, rust-red (gradients)

2. **Typography**
   - Custom fonts: `bogart` (body), `macropolo` (accent headings)
   - Lowercase section headers (brand style)
   - Mixed case for personality in select headings

3. **Imagery**
   - Natural elements: flowers, oranges, sunflowers
   - Peacock motif (decorative illustrations)
   - Artisan photography, fabric close-ups
   - Customer story portraits

4. **Texture & Depth**
   - Noise texture overlays
   - Gradient backgrounds (blue-to-rust, teal sections)
   - Layered visuals with absolute positioning

### Layout Patterns

1. **Full-width hero sections** with centered text
2. **3-column product grids** (responsive to 1-2 on mobile)
3. **Horizontal carousels** for creators and fabrics (snap scrolling)
4. **Two-column layouts** for content pages (image + text)
5. **Timeline/step layouts** for process explanation

### Component Library

Key reusable components:
- `Header` - Logo, breadcrumb nav, cart icon
- `Hero` - Full-width, centered text, optional video background
- `ProductCard` - Image, designer, title, price
- `StoryCard` - Square image with overlay, links to stories site
- `CreatorCard` - Circular avatar with name
- `FabricCard` - Landscape image with fabric name/type
- `TimelineStep` - Numbered step with icon and description
- `Pillar` - Icon, title, description (for values section)
- `Footer` - 3-column with peacock illustration

## Page-by-Page Breakdown

### Homepage

1. **Header** - Sticky nav with breadcrumb links
2. **Hero** - "Be Your Own Brand" tagline with CTA
3. **Co-Creation Section** - Intro with creator carousel (12 circular avatars)
4. **Stories Section** - Grid of clickable story cards (links to stories.mymorni.ai)
5. **Product Browse** - "Rooted" collection title with product grid
6. **Shop/Atelier** - 3-column product cards with prices ($444-$1,555)
7. **B2B Section** - "Your Brand Your Way" with CTA to brand-partners
8. **Journal Section** - Blog article previews
9. **Instagram Feed** - Grid of Instagram post images
10. **Footer** - Help, Connect, Newsletter columns + peacock illustration

### Co-Creation Page

1. **Hero** - "Not just made for you, made with you"
2. **Timeline** - 5 steps from Day 1 to Days 39-44
   - Step 1: Consultation
   - Step 2: Design
   - Step 3: Fabric selection
   - Step 4: Production
   - Step 5: Delivery
3. **Social Proof** - Grid of story cards (11 customers)
4. **CTAs** - "Co-Create from scratch" / "Customize from store"
5. **Footer**

### About Page

1. **Hero** - Image left, text right (60/40 split)
2. **Our Story** - Text content section
3. **Four Pillars** - Gradient background section with 4 value cards
   - Each pillar: amber icon, uppercase title, description
   - Noise texture overlay
4. **Footer** with peacock

### Fabrics Page

1. **Video Hero** - Full-screen with "Where Nature Meets Culture"
2. **Fabric Library Section** - "THE FABRIC LIBRARY" header
3. **Featured Pieces Carousel** - 6 fabric cards (Corduroy variants)
4. **Navigation Cards** - "Techniques" and "Silhouettes" link cards
5. **CTA Section** - Teal gradient with "Co-Create Now" button
6. **Footer**

## Data Models

### Product
```typescript
interface Product {
  id: string;
  title: string;
  designer: string;
  price: number;
  image: string;
  collection?: string;
  href: string;
}
```

### Story
```typescript
interface Story {
  id: string;
  name: string;
  image: string;
  href: string; // External link to stories.mymorni.ai
}
```

### Creator/Artisan
```typescript
interface Creator {
  id: string;
  name: string;
  image: string;
  role?: string;
}
```

### Fabric
```typescript
interface Fabric {
  id: string;
  name: string;
  material: string; // Organic, Wool, Cotton, Bamboo, etc.
  image: string;
}
```

### Timeline Step
```typescript
interface TimelineStep {
  number: number;
  icon: string;
  title: string;
  description: string;
  days: string; // "Day 1", "Days 2-5", etc.
}
```

### Pillar
```typescript
interface Pillar {
  icon: string;
  title: string;
  description: string;
}
```

## Prompt Template for Cloning

When asking an LLM to recreate this site, use this prompt structure:

---

**Prompt:**

Create a Next.js 14 website clone inspired by Morni (mymorni.com), a custom clothing platform. Use the App Router and Tailwind CSS.

**Design Requirements:**
- Light gray background (#f3f3f3)
- Black text with amber-600 accents
- Custom fonts: serif for body, display font for accent headings
- Peacock illustration decorative elements
- Noise texture overlays on gradient sections

**Pages to Create:**
1. Homepage with hero, creator carousel, story cards, product grid, and footer
2. Co-Creation page with 5-step timeline
3. About page with four pillars section
4. Fabrics page with video hero and fabric carousel

**Components Needed:**
- Header with logo and breadcrumb navigation
- Hero section (text-centered and video variants)
- ProductCard, StoryCard, CreatorCard, FabricCard
- TimelineStep for process display
- Pillar component for values
- Footer with 3 columns and decorative illustration

**Key Patterns:**
- Horizontal snap-scrolling carousels
- 3-column responsive product grids
- Full-width gradient sections
- Image optimization with Next.js Image

Refer to COMPONENTS.md for component code and STYLES.md for design tokens.

---

## File Structure for Clone

```
mymorni-clone/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with fonts
│   ├── co-creation/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── fabrics/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── VideoHero.tsx
│   ├── cards/
│   │   ├── ProductCard.tsx
│   │   ├── StoryCard.tsx
│   │   ├── CreatorCard.tsx
│   │   └── FabricCard.tsx
│   ├── sections/
│   │   ├── CreatorCarousel.tsx
│   │   ├── StoryGrid.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── Timeline.tsx
│   │   ├── FourPillars.tsx
│   │   └── InstagramFeed.tsx
│   └── ui/
│       ├── Button.tsx
│       └── NavCard.tsx
├── lib/
│   ├── data.ts               # Mock data for products, stories, etc.
│   └── types.ts              # TypeScript interfaces
├── public/
│   ├── images/
│   │   ├── morni-logo-black.svg
│   │   ├── peacock-footer.webp
│   │   └── ...
│   ├── icons/
│   │   └── v-tl-*.png        # Timeline icons
│   └── videos/
│       └── fabrics-hero.mp4
├── docs/
│   ├── STYLES.md
│   ├── COMPONENTS.md
│   └── LLM-CONTEXT.md
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Related Documentation

- **STYLES.md** - Complete design token reference
- **COMPONENTS.md** - Component code with TypeScript interfaces
