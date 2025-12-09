# Morni Design System - Components Reference

## Navigation

### Header Navigation

**Purpose**: Main site navigation with logo, menu links, and cart

**Structure**:
```tsx
<header className="sticky top-0 z-20 bg-gray-100">
  <nav className="flex items-center justify-between px-6 py-4">
    {/* Logo */}
    <Link href="/">
      <Image
        src="/images/morni-logo-black.svg"
        alt="Morni"
        width={120}
        height={40}
      />
    </Link>

    {/* Breadcrumb Navigation */}
    <div className="hidden md:flex items-center gap-6">
      <Link href="/" className="text-sm hover:underline">Home</Link>
      <Link href="/co-creation" className="text-sm hover:underline">Co-Create</Link>
      <Link href="/atelier" className="text-sm hover:underline">Atelier</Link>
      <Link href="/b2b" className="text-sm hover:underline">B2B</Link>
      <Link href="/fabrics" className="text-sm hover:underline">Materials</Link>
    </div>

    {/* Cart Icon */}
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {cartCount}
      </span>
    </Link>
  </nav>
</header>
```

---

## Hero Sections

### Home Hero

**Purpose**: Primary landing section with tagline and value proposition

**Props/Variants**:
- `tagline`: Main headline text
- `subtitle`: Supporting description
- `cta`: Call-to-action button config

```tsx
<section className="relative py-20 px-6 bg-gray-100">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
      Be Your Own Brand
    </h1>
    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
      Forget mass production. Your story deserves center stage.
    </p>
    <Link
      href="/co-creation"
      className="inline-block px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
    >
      Get Started
    </Link>
  </div>
</section>
```

### Co-Creation Hero

**Purpose**: Introduction to the custom creation process

```tsx
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Not just made for you, made with you
    </h1>
    <p className="text-xl text-gray-600">
      Your Vision, Handcrafted & Delivered in 44 Days
    </p>
  </div>
</section>
```

### Fabrics Hero (Video)

**Purpose**: Full-width video hero with overlay text

```tsx
<section className="relative h-screen">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/fabrics-hero.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/80" />
  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
      Where Nature Meets Culture
    </h1>
  </div>
</section>
```

---

## Cards

### Product Card

**Purpose**: Display product in shop/atelier grid

**Props**:
- `image`: Product image URL
- `designer`: Designer/artisan name
- `title`: Product name
- `price`: Price in USD

```tsx
interface ProductCardProps {
  image: string;
  designer: string;
  title: string;
  price: number;
  href: string;
}

const ProductCard = ({ image, designer, title, price, href }: ProductCardProps) => (
  <Link href={href} className="group">
    <div className="relative aspect-[3/4] overflow-hidden bg-white rounded-lg">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="mt-4">
      <p className="text-sm text-gray-500">{designer}</p>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-lg font-semibold">${price.toLocaleString()}</p>
    </div>
  </Link>
);
```

### Story Card

**Purpose**: Link to customer stories/testimonials

**Props**:
- `image`: Customer/story image
- `name`: Customer name
- `href`: Story link

```tsx
interface StoryCardProps {
  image: string;
  name: string;
  href: string;
}

const StoryCard = ({ image, name, href }: StoryCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative aspect-square overflow-hidden rounded-lg group"
  >
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
    <span className="absolute bottom-3 left-3 text-white font-medium">
      {name}
    </span>
  </a>
);
```

### Creator Card

**Purpose**: Display designer/artisan in carousel

```tsx
interface CreatorCardProps {
  image: string;
  name: string;
}

const CreatorCard = ({ image, name }: CreatorCardProps) => (
  <div className="flex-shrink-0 w-32 md:w-40 snap-center">
    <div className="relative aspect-square rounded-full overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
    <p className="text-center mt-2 text-sm">{name}</p>
  </div>
);
```

### Fabric Card

**Purpose**: Display fabric type in carousel

```tsx
interface FabricCardProps {
  image: string;
  name: string;
  material: string;
}

const FabricCard = ({ image, name, material }: FabricCardProps) => (
  <div className="flex-shrink-0 w-64 snap-center">
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={`${name} in ${material}`}
        fill
        className="object-cover"
      />
    </div>
    <div className="mt-3">
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-500">{material}</p>
    </div>
  </div>
);
```

### Navigation Card (Link Card)

**Purpose**: Large clickable card for section navigation

```tsx
interface NavCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

const NavCard = ({ image, title, description, href }: NavCardProps) => (
  <Link
    href={href}
    className="group relative overflow-hidden rounded-xl bg-white/50 backdrop-blur p-6 hover:bg-white/80 transition"
  >
    <div className="flex items-center gap-4">
      <div className="relative w-20 h-20 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-medium group-hover:underline">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </div>
  </Link>
);
```

---

## Timeline / Process Steps

### Timeline Step

**Purpose**: Display step in co-creation process

```tsx
interface TimelineStepProps {
  number: number;
  icon: string;
  title: string;
  description: string;
  days: string;
}

const TimelineStep = ({ number, icon, title, description, days }: TimelineStepProps) => (
  <div className="flex gap-6 items-start">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
        <Image src={icon} alt="" width={24} height={24} />
      </div>
      <div className="w-px h-full bg-amber-200 mt-2" />
    </div>
    <div className="pb-12">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-amber-600">{days}</span>
        <span className="w-6 h-6 rounded-full bg-black text-white text-sm flex items-center justify-center">
          {number}
        </span>
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);
```

---

## Four Pillars Section

**Purpose**: Display brand values/pillars on About page

```tsx
interface PillarProps {
  icon: string;
  title: string;
  description: string;
}

const Pillar = ({ icon, title, description }: PillarProps) => (
  <div className="text-center">
    <div className="w-28 h-30 mx-auto mb-4 bg-amber-600 rounded-lg flex items-center justify-center">
      <Image src={icon} alt="" width={48} height={48} />
    </div>
    <h5 className="font-macropolo uppercase text-amber-600 font-bold mb-2">
      {title}
    </h5>
    <p className="font-bogart text-sm">{description}</p>
  </div>
);

const FourPillars = ({ pillars }: { pillars: PillarProps[] }) => (
  <section className="relative py-20 overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-white to-rust-red opacity-30" />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        the four pillarS of morni
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {pillars.map((pillar, i) => (
          <Pillar key={i} {...pillar} />
        ))}
      </div>
    </div>

    {/* Noise overlay */}
    <div className="absolute inset-0 opacity-10 pointer-events-none mob-noise" />
  </section>
);
```

---

## Buttons

### Primary Button

```tsx
const PrimaryButton = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    href={href}
    className="inline-block px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
  >
    {children}
  </Link>
);
```

### Secondary Button

```tsx
const SecondaryButton = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    href={href}
    className="inline-block px-8 py-3 border border-black text-black rounded-md hover:bg-black hover:text-white transition-colors"
  >
    {children}
  </Link>
);
```

### CTA Button (Teal)

```tsx
const CTAButton = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    href={href}
    className="inline-block px-8 py-3 bg-gray-600 text-white rounded-md border-2 border-blue-300 hover:bg-gray-700 transition-colors"
  >
    {children}
  </Link>
);
```

---

## Footer

```tsx
const Footer = () => (
  <footer className="relative bg-gray-100 pt-16 pb-8">
    {/* Peacock illustration */}
    <div className="absolute bottom-0 right-0 opacity-80">
      <Image
        src="/images/peacock-footer.webp"
        alt=""
        width={256}
        height={256}
      />
    </div>

    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Help Column */}
        <div>
          <h4 className="font-semibold mb-4">Help</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/fabrics">Fabrics</Link></li>
            <li><Link href="/journal">Journal</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Connect Column */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>hello@mymorni.com</li>
            <li>+1 (555) 123-4567</li>
            <li className="flex gap-4 pt-2">
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="Pinterest"><PinterestIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-semibold mb-4">Stay Updated</h4>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>Morni Inc. | Sheridan, WY</p>
        <p>&copy; {new Date().getFullYear()} Morni. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
```

---

## Carousels

### Creator Carousel

```tsx
const CreatorCarousel = ({ creators }: { creators: { image: string; name: string }[] }) => (
  <section className="py-12 overflow-hidden">
    <div className="flex gap-4 animate-scroll">
      {/* Double the items for infinite scroll effect */}
      {[...creators, ...creators].map((creator, i) => (
        <CreatorCard key={i} {...creator} />
      ))}
    </div>
  </section>
);

// CSS for infinite scroll
// @keyframes scroll {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
// .animate-scroll {
//   animation: scroll 30s linear infinite;
// }
```

### Fabric Carousel

```tsx
const FabricCarousel = ({ fabrics }: { fabrics: FabricCardProps[] }) => (
  <section className="py-12">
    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-6">
      {fabrics.map((fabric, i) => (
        <FabricCard key={i} {...fabric} />
      ))}
    </div>
  </section>
);
```

---

## Instagram Feed

```tsx
interface InstagramPost {
  image: string;
  href: string;
}

const InstagramFeed = ({ posts }: { posts: InstagramPost[] }) => (
  <section className="py-12 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <InstagramIcon className="w-6 h-6" />
        @mymorni
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square relative overflow-hidden group"
          >
            <Image
              src={post.image}
              alt="Instagram post"
              fill
              className="object-cover group-hover:scale-110 transition-transform"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);
```
