# Morni Design System - Styles Reference

## Color Palette

| Name | Value | Usage |
|------|-------|-------|
| `bg-primary` | `#f3f3f3` | Main background (gray-100) |
| `bg-white` | `#ffffff` | Card backgrounds, overlays |
| `text-primary` | `#000000` | Headings, body text |
| `accent-amber` | `amber-600` | Icons, accent headings, decorative elements |
| `accent-teal` | `teal-600` / `teal-300` | CTAs, gradients on fabric pages |
| `accent-blue` | `blue-300` | Gradient elements |
| `accent-rust` | Rust-red | Gradient accents |
| `border-amber-50` | `amber-600/50` | Decorative hairlines (50% opacity) |

### Gradient Patterns

```css
/* Blue to Rust gradient */
background: linear-gradient(to bottom, var(--blue-300), var(--rust-red));

/* Gray fade overlay */
background: linear-gradient(to bottom, transparent, var(--gray-100));

/* Teal gradient section */
background: linear-gradient(to bottom, var(--teal-300), var(--teal-600));
```

## Typography

### Font Families

| Name | Usage |
|------|-------|
| `font-bogart` | Body text, descriptions (custom font) |
| `font-macropolo` | Accent headings, pillar titles (custom font) |
| System Stack | Fallback: `system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` |

### Font Scale

| Element | Size | Weight | Line Height | Class |
|---------|------|--------|-------------|-------|
| H1 (Hero) | 48px+ | 700 | 1.2 | `text-4xl md:text-5xl font-bold` |
| H2 (Section) | 36px | 600 | 1.3 | `text-3xl font-semibold` |
| H3 (Card Title) | 24px | 500 | 1.4 | `text-2xl font-medium` |
| H4 (Subtitle) | 20px | 500 | 1.4 | `text-xl font-medium` |
| H5 (Pillar) | 16px | 700 | 1.5 | `text-base font-bold uppercase font-macropolo text-amber-600` |
| Body | 16px | 400 | 1.6 | `text-base font-bogart` |
| Small | 14px | 400 | 1.5 | `text-sm` |
| XS | 12px | 400 | 1.5 | `text-xs` |

### Text Styling Patterns

```css
/* Hero tagline */
.hero-tagline {
  @apply text-4xl md:text-5xl font-bold tracking-tight;
}

/* Section headers (lowercase brand style) */
.section-header {
  @apply text-3xl font-semibold lowercase;
}

/* Mixed case headings (brand personality) */
.pillar-heading {
  @apply text-base font-bold uppercase font-macropolo text-amber-600;
}
```

## Spacing System

### Base Unit: 4px (Tailwind default)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Small gaps |
| `space-4` | 16px | Standard gaps |
| `space-6` | 24px | Medium spacing |
| `space-8` | 32px | Section gaps |
| `space-10` | 40px | Large gaps |
| `space-12` | 48px | Section padding top |
| `space-20` | 80px | Section padding bottom |

### Common Patterns

```css
/* Section padding */
.section {
  @apply pt-12 pb-20;
}

/* Responsive section padding */
.section-responsive {
  @apply py-8 md:py-20;
}

/* Content gap */
.content-gap {
  @apply gap-8;
}

/* Flex gaps */
.flex-gap {
  @apply gap-4 md:gap-10;
}
```

## Layout Patterns

### Container Widths

| Name | Width | Usage |
|------|-------|-------|
| Full | 100% | Hero sections, full-bleed |
| Wide | 90% | Main content areas |
| Standard | 75% | Text content sections |
| Narrow | 60% | Focused content |

### Grid Systems

```css
/* Product grid (3 columns) */
.product-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

/* Creator carousel (responsive) */
.creator-grid {
  @apply flex overflow-x-auto gap-4 snap-x;
}

/* Two-column layout */
.two-col {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8;
}

/* Story cards grid */
.story-grid {
  @apply grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4;
}
```

## Border & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-none` | 0 | Sharp edges (some cards) |
| `rounded` | 4px | Subtle rounding |
| `rounded-md` | 6px | Buttons, inputs |
| `rounded-lg` | 8px | Cards |
| `rounded-xl` | 12px | Large cards |
| `rounded-full` | 9999px | Avatars, pills |

## Shadows

| Token | Usage |
|-------|-------|
| `shadow-sm` | Subtle card lift |
| `shadow` | Standard cards |
| `shadow-md` | Hover states |
| `shadow-lg` | Modals, dropdowns |

## Decorative Elements

### Hairline Separators

```css
.hairline {
  @apply h-px bg-amber-600/50;
}

.hairline-12 {
  @apply h-3 w-px bg-amber-600/50;
}
```

### Noise Texture Overlay

```css
.noise-overlay {
  @apply absolute inset-0 opacity-10;
  background-image: url('/textures/noise.png');
  pointer-events: none;
}

/* Mobile noise class */
.mob-noise {
  @apply absolute inset-0;
  /* Apply noise texture with low opacity */
}
```

### Peacock Footer Illustration

```html
<img
  src="/images/peacock-footer.webp"
  alt="Peacock illustration"
  class="absolute bottom-0 right-0 w-64 opacity-80"
/>
```

## Responsive Breakpoints

| Breakpoint | Width | Prefix |
|------------|-------|--------|
| Mobile | < 640px | (default) |
| SM | 640px | `sm:` |
| MD | 768px | `md:` |
| LG | 1024px | `lg:` |
| XL | 1280px | `xl:` |
| 2XL | 1536px | `2xl:` |

## Animation & Transitions

```css
/* Standard transition */
.transition-standard {
  @apply transition-all duration-300 ease-in-out;
}

/* Hover lift */
.hover-lift {
  @apply hover:-translate-y-1 hover:shadow-md transition-transform;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
```

## Z-Index Scale

| Layer | Value | Usage |
|-------|-------|-------|
| Base | 0 | Default content |
| Elevated | 10 | Cards on hover |
| Sticky | 20 | Sticky headers |
| Dropdown | 30 | Dropdowns, menus |
| Modal | 40 | Modal overlays |
| Tooltip | 50 | Tooltips |
