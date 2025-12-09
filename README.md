# Morni Site Clone - LLM Ready

This project contains a complete extraction of the **mymorni.com** design system, components, and assets, organized for easy cloning with LLMs.

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

```
morniplus/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Header, Footer
│   ├── hero/              # Hero, VideoHero
│   ├── cards/             # ProductCard, StoryCard, CreatorCard, FabricCard, NavCard
│   ├── sections/          # Timeline, FourPillars, ProductGrid, StoryGrid, Carousels
│   └── ui/                # Button and other UI primitives
├── lib/
│   ├── types.ts           # TypeScript interfaces
│   └── data.ts            # Mock data for products, stories, etc.
├── styles/
│   └── globals.css        # Global styles + Tailwind
├── public/                # Static assets (images, icons, videos)
└── docs/                  # LLM-ready documentation
    ├── STYLES.md          # Design tokens reference
    ├── COMPONENTS.md      # Component code documentation
    ├── ASSETS.md          # Asset manifest for MuleRouter
    └── LLM-CONTEXT.md     # Complete site context for cloning
```

## Documentation Files

### For LLM Site Cloning

1. **`docs/LLM-CONTEXT.md`** - Start here! Complete site overview, architecture, and prompt templates
2. **`docs/STYLES.md`** - All design tokens (colors, typography, spacing, etc.)
3. **`docs/COMPONENTS.md`** - Documented React components with code examples

### For Image/Video Generation

4. **`docs/ASSETS.md`** - Complete asset manifest with AI generation prompts for MuleRouter

## How to Use with LLMs

### Clone the Site
Feed the contents of `docs/LLM-CONTEXT.md`, `docs/STYLES.md`, and `docs/COMPONENTS.md` to an LLM with your specific requirements.

### Generate Similar Assets
Use the prompts in `docs/ASSETS.md` with MuleRouter or other AI image generators to create similar visuals.

### Remix for Your Brand
Modify the color palette in `tailwind.config.js` and update content in `lib/data.ts` to customize for your brand.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (with custom design tokens)
- **TypeScript**

## Original Site Features Captured

- Sticky navigation with breadcrumb links
- Hero sections (text-centered and video variants)
- Infinite scroll creator carousel
- Story cards linking to external testimonials
- 3-column product grids with hover effects
- 5-step timeline for co-creation process
- Four pillars brand values section with gradient background
- Peacock motif decorative elements
- Newsletter signup footer
- Responsive design patterns
