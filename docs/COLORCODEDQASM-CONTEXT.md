# ColorCodedQASM - Site Context Document

> Remix of Morni's co-creation platform with ColorCodedCrime's luxury artisanal aesthetic. Ready for LLM site generation with ReactBits + UntitledUI components.

## Brand Concept

**ColorCodedQASM** (Quantum Artisanal Style Manifesto) - A luxury sustainable fashion platform that merges:
- **Morni's co-creation model** (custom garments, artisan collaboration, 44-day delivery)
- **ColorCodedCrime's aesthetic** (dark luxury, heritage textiles, museum-quality pieces)
- **Quantum-inspired naming** (QASM = Quantum Assembly, representing the assembly of traditional craft into modern form)

### Brand Tagline
"Where Heritage Becomes Algorithm" / "Craft Encoded. Culture Compiled."

### Brand Positioning
Luxury artisanal fashion as cultural code - each garment is a program written in thread, executing centuries of textile knowledge.

---

## Color Palette

Based on ColorCodedCrime's sophisticated dark palette:

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0a` | Main dark background |
| `--bg-secondary` | `#141414` | Card backgrounds |
| `--bg-tertiary` | `#1f1f1f` | Elevated surfaces |
| `--bg-cream` | `#e8e3d6` | Accent sections, CTAs |
| `--text-primary` | `#ffffff` | Headings on dark |
| `--text-secondary` | `#a3a3a3` | Body text on dark |
| `--text-dark` | `#0a0a0a` | Text on cream |
| `--accent-warm` | `#542c23` | Warm brown accent |
| `--accent-gold` | `#c9a227` | Luxury gold highlights |
| `--accent-burgundy` | `#722f37` | Deep red accent |
| `--border` | `#262626` | Subtle borders |

### Gradient Patterns
```css
/* Luxury fade */
background: linear-gradient(180deg, #0a0a0a 0%, #141414 100%);

/* Warm accent gradient */
background: linear-gradient(135deg, #542c23 0%, #722f37 100%);

/* Gold shimmer */
background: linear-gradient(90deg, #c9a227 0%, #e8d78a 50%, #c9a227 100%);
```

---

## Typography

| Element | Font | Size | Weight | Tracking |
|---------|------|------|--------|----------|
| Display | Poppins | 72px | 300 | -0.02em |
| H1 | Poppins | 48px | 500 | -0.01em |
| H2 | Poppins | 36px | 500 | 0 |
| H3 | Poppins | 24px | 500 | 0.02em |
| Body | Poppins | 16px | 400 | 0.06rem |
| Caption | Poppins | 14px | 400 | 0.08rem |
| Overline | Poppins | 12px | 600 | 0.15em |

---

## Site Architecture

```
/                           - Homepage (hero, featured, collections, process)
/encode                     - Co-creation flow (equivalent to /co-creation)
/archive                    - Shop/catalog (equivalent to /atelier)
/collections/[slug]         - Collection pages
/artifact/[id]              - Product detail pages
/about                      - Brand story, philosophy
/artisans                   - Meet the craftspeople
/journal                    - Editorial content
```

---

## Page Breakdown

### Homepage

1. **Hero Section** (Full-screen video/image)
   - Tagline: "Craft Encoded. Culture Compiled."
   - Subtle animated grain overlay
   - CTA: "Begin Encoding" → /encode

2. **Featured Artifacts** (Horizontal scroll)
   - 3-4 hero products from current collection
   - Price + "View Artifact" link

3. **The Protocol** (Process overview)
   - 5-step visual timeline (dark cards)
   - Icons in gold accent

4. **Collections Grid**
   - Featured collection cards
   - Hover reveal with description

5. **Artisan Spotlight**
   - Rotating artisan profiles
   - Quote + craft specialty

6. **Journal Teasers**
   - 3 recent articles
   - Dark card layout

7. **Footer**
   - Newsletter (cream accent bar)
   - Navigation links
   - Social icons

### /encode (Co-Creation)

1. **Hero** - "Your Vision, Our Code"
2. **The Protocol Timeline** - Detailed 5-step process
3. **Testimonial Grid** - Customer stories
4. **Dual CTA**:
   - "Start from Zero" (blank canvas)
   - "Fork an Artifact" (customize existing)

### /archive (Shop)

1. **Filter Bar** - Collection, Price, Size, Availability
2. **Product Grid** - 3-column on desktop
3. **Quick View Modal** - Size selector, add to cart

---

## Components (ReactBits + UntitledUI Patterns)

### Navigation
```tsx
// UntitledUI-style minimal nav
<header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
  <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
    <Logo />
    <NavLinks /> {/* Home, Archive, Encode, About */}
    <div className="flex items-center gap-4">
      <SearchIcon />
      <CartIcon />
    </div>
  </nav>
</header>
```

### Hero (ReactBits animated)
```tsx
<section className="relative h-screen bg-black overflow-hidden">
  {/* Video/Image background */}
  <video autoPlay muted loop className="absolute inset-0 object-cover opacity-60" />

  {/* Grain overlay */}
  <div className="absolute inset-0 bg-noise opacity-20" />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl md:text-8xl font-light text-white tracking-tight"
    >
      Craft Encoded.
    </motion.h1>
    <motion.p className="text-xl text-white/70 mt-4">
      Culture Compiled.
    </motion.p>
    <Button variant="cream" className="mt-8">Begin Encoding</Button>
  </div>
</section>
```

### Product Card (UntitledUI minimal)
```tsx
<article className="group">
  <div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden">
    <Image fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
    {/* Quick view on hover */}
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <Button variant="outline-white">Quick View</Button>
    </div>
  </div>
  <div className="mt-4 space-y-1">
    <p className="text-xs text-neutral-500 uppercase tracking-widest">{collection}</p>
    <h3 className="text-white font-medium">{title}</h3>
    <p className="text-neutral-400">${price}</p>
  </div>
</article>
```

### Timeline Step (Dark variant)
```tsx
<div className="flex gap-6 items-start">
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="w-px h-full bg-neutral-800 mt-2" />
  </div>
  <div className="pb-12">
    <span className="text-xs text-amber-500 uppercase tracking-widest">{days}</span>
    <h3 className="text-xl text-white font-medium mt-1">{title}</h3>
    <p className="text-neutral-400 mt-2">{description}</p>
  </div>
</div>
```

---

## Data Models

```typescript
interface Artifact {
  id: string;
  title: string;
  slug: string;
  collection: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL')[];
  availability: 'in_stock' | 'sold_out' | 'pre_order';
  description: string;
  materials: string[];
  techniques: string[];
  artisan?: string;
  leadTime?: string;
}

interface Collection {
  id: string;
  title: string;
  slug: string;
  description: string;
  heroImage: string;
  artifacts: Artifact[];
}

interface Artisan {
  id: string;
  name: string;
  craft: string;
  region: string;
  image: string;
  bio: string;
  quote?: string;
}

interface ProtocolStep {
  number: number;
  icon: string;
  title: string;
  description: string;
  days: string;
}
```

---

## Image Sources from ColorCodedCrime

Use these as references for MuleRouter generation:

| Image | Source URL | Description |
|-------|-----------|-------------|
| Dilkash Kimono | `colorcodedcrime.com/cdn/shop/files/DSC7305.jpg` | Embroidered kimono jacket, Mughal motifs |
| Hand Embroidered Suit | `colorcodedcrime.com/cdn/shop/files/DSC5935.jpg` | Oversized suit with detailed embroidery |
| Jamdani Dress | `colorcodedcrime.com/cdn/shop/files/DSC8111.jpg` | Draped dress in heritage Jamdani weave |
| Cranes Coat | Product imagery | Long coat with crane embroidery |
| Blue Iris Shacket | `colorcodedcrime.com/cdn/shop/files/DSC4707.jpg` | Plant and bird motif shirt-jacket |
| Brick Lotus Set | `colorcodedcrime.com/cdn/shop/files/DSC_2445.jpg` | Coordinated set with lotus embroidery |
| Egyptian Lotus Vest | `colorcodedcrime.com/cdn/shop/files/DSC_2053.jpg` | Ice blue vest with lotus details |
| Gyre Falcon Suit | `colorcodedcrime.com/cdn/shop/files/DSC4177.jpg` | Corduroy plaid suit, oversized |

---

## Animation Patterns (ReactBits)

```tsx
// Fade up on scroll
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

// Stagger children
const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// Image reveal
const imageReveal = {
  initial: { clipPath: 'inset(100% 0 0 0)' },
  animate: { clipPath: 'inset(0% 0 0 0)' },
  transition: { duration: 1, ease: [0.77, 0, 0.175, 1] }
};

// Text character split
// Use ReactBits SplitText component for hero text animations
```

---

## UntitledUI Component Mappings

| QASM Component | UntitledUI Base | Customization |
|----------------|-----------------|---------------|
| Button Primary | Button/Primary | Cream bg, dark text |
| Button Secondary | Button/Secondary Outline | White outline on dark |
| Input | Input/Default | Dark bg, light border |
| Card | Card/Default | bg-neutral-900, border-neutral-800 |
| Modal | Modal/Centered | Dark overlay, blur backdrop |
| Badge | Badge/Modern | Gold or burgundy accent |
| Avatar | Avatar/Default | For artisan profiles |
| Tabs | Tabs/Underline | Gold underline indicator |

---

## File Structure

```
colorcodedqasm/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout (dark theme)
│   ├── encode/
│   │   └── page.tsx          # Co-creation flow
│   ├── archive/
│   │   └── page.tsx          # Shop/catalog
│   ├── collections/
│   │   └── [slug]/page.tsx   # Collection detail
│   ├── artifact/
│   │   └── [id]/page.tsx     # Product detail
│   ├── about/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── hero/
│   │   ├── VideoHero.tsx
│   │   └── CollectionHero.tsx
│   ├── cards/
│   │   ├── ArtifactCard.tsx
│   │   ├── CollectionCard.tsx
│   │   └── ArtisanCard.tsx
│   ├── sections/
│   │   ├── Protocol.tsx
│   │   ├── FeaturedArtifacts.tsx
│   │   ├── ArtisanSpotlight.tsx
│   │   └── JournalTeaser.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       └── Badge.tsx
├── lib/
│   ├── types.ts
│   ├── data.ts
│   └── animations.ts
├── public/
│   ├── images/
│   ├── videos/
│   └── textures/
└── docs/
    ├── COLORCODEDQASM-CONTEXT.md
    ├── STYLES.md
    ├── COMPONENTS.md
    └── MULEROUTER-PROMPTS.md
```
