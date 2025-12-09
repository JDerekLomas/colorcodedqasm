# ColorCodedQASM - Site Clone & Remix

A luxury artisanal fashion platform remixing **Morni's** co-creation model with **ColorCodedCrime's** dark luxury aesthetic.

## Concept

**ColorCodedQASM** (Quantum Artisanal Style Manifesto) merges:
- Morni's custom garment co-creation (44-day delivery)
- ColorCodedCrime's dark luxury aesthetic & heritage textile focus
- Quantum-inspired naming (each garment as "encoded" cultural algorithm)

**Tagline**: "Craft Encoded. Culture Compiled."

## Quick Start

```bash
# Install dependencies
npm install

# Add framer-motion for animations
npm install framer-motion

# Run development server
npm run dev
```

## Project Structure

```
morniplus/
├── app-qasm/                  # Next.js App Router (QASM version)
│   ├── layout.tsx            # Root layout (dark theme)
│   ├── page.tsx              # Homepage
│   ├── encode/page.tsx       # Co-creation flow
│   ├── archive/page.tsx      # Shop/catalog
│   └── ...
├── components/
│   ├── qasm/                 # QASM-styled components
│   │   ├── layout/          # Header, Footer
│   │   ├── hero/            # VideoHero
│   │   ├── cards/           # ArtifactCard, ArtisanCard, CollectionCard
│   │   ├── sections/        # Protocol, FeaturedArtifacts, etc.
│   │   └── ui/              # Button, Badge, Input
│   └── [morni components]   # Original Morni components
├── lib/
│   ├── qasm-types.ts        # TypeScript interfaces
│   └── qasm-data.ts         # Mock data
├── styles/
│   ├── globals.css          # Original Morni styles
│   └── qasm-globals.css     # QASM dark theme styles
├── docs/
│   ├── COLORCODEDQASM-CONTEXT.md    # Full site context
│   ├── MULEROUTER-PROMPTS.md        # AI image/video generation prompts
│   ├── STYLES.md                    # Original Morni design tokens
│   ├── COMPONENTS.md                # Original Morni components
│   └── ASSETS.md                    # Original Morni asset manifest
└── tailwind.config.qasm.js  # QASM Tailwind config
```

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `dark-500` | `#0a0a0a` | Primary background |
| `dark-300` | `#141414` | Card backgrounds |
| `dark-100` | `#1f1f1f` | Elevated surfaces |
| `cream` | `#e8e3d6` | CTA sections, buttons |
| `gold` | `#c9a227` | Accent, highlights |
| `burgundy` | `#722f37` | Secondary accent |
| `warm` | `#542c23` | Brown accent |

### Typography

- **Font**: Poppins (Google Fonts)
- **Display**: 72px, weight 300, tracking -0.02em
- **Headings**: 500 weight
- **Body**: 400 weight, 0.02em tracking
- **Overline**: 12px, 600 weight, 0.15em tracking, uppercase

## Key Pages

1. **Homepage** (`/`)
   - Video hero with animated text
   - Featured artifacts grid
   - Protocol timeline (44-day process)
   - Collection cards
   - Artisan spotlight
   - Journal teasers

2. **Encode** (`/encode`)
   - Process explanation
   - What's included with each artifact
   - Testimonials
   - Consultation booking form

3. **Archive** (`/archive`)
   - Filterable product grid
   - Collection filtering
   - Product cards with hover effects

## Components

### UI Components
- `Button` - Primary, Secondary, Gold, Outline variants
- `Badge` - Gold, Burgundy, Outline, Sold-out variants
- `Input` - Dark theme inputs with gold focus

### Cards
- `ArtifactCard` - Product display with hover overlay
- `ArtisanCard` - Artisan profiles with quote overlay
- `CollectionCard` - Large collection previews

### Sections
- `VideoHero` - Full-screen hero with animated text
- `Protocol` - Timeline display for co-creation process
- `FeaturedArtifacts` - Product grid section
- `ArtisanSpotlight` - Featured artisan with bio
- `JournalTeaser` - Blog post previews
- `Testimonials` - Customer quotes grid

## MuleRouter Prompts

See `docs/MULEROUTER-PROMPTS.md` for:
- Hero video generation prompts
- Product photography prompts
- Artisan portrait prompts
- Texture and icon prompts
- Social media asset prompts

## Image Sources

Reference images from ColorCodedCrime for MuleRouter:
- `colorcodedcrime.com/cdn/shop/files/DSC7305.jpg` (Dilkash Kimono)
- `colorcodedcrime.com/cdn/shop/files/DSC5935.jpg` (Embroidered Suit)
- `colorcodedcrime.com/cdn/shop/files/DSC8111.jpg` (Jamdani Dress)
- `colorcodedcrime.com/cdn/shop/files/DSC4707.jpg` (Blue Iris Shacket)

## Dependencies

```json
{
  "next": "14.2.0",
  "react": "^18",
  "framer-motion": "^10",
  "tailwindcss": "^3.4"
}
```

## Switching Between Morni & QASM

The project contains both versions:

**For Morni (light theme)**:
- Use `app/` directory
- Use `components/` (non-qasm)
- Use `styles/globals.css`
- Use `tailwind.config.js`

**For QASM (dark theme)**:
- Use `app-qasm/` directory
- Use `components/qasm/`
- Use `styles/qasm-globals.css`
- Use `tailwind.config.qasm.js`

To switch, rename the directories or update `next.config.js`.

## ReactBits + UntitledUI

Components follow these patterns:
- **ReactBits**: Framer Motion animations (fade-up, stagger, reveal)
- **UntitledUI**: Minimal, clean component structure with consistent spacing

Animation utilities in components:
```tsx
// Fade up on scroll
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}

// Staggered children
delay: index * 0.1
```
