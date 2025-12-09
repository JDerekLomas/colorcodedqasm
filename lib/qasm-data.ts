// Garden of Eden Mock Data - Fashion Archaeology
import type {
  Artifact,
  Collection,
  Artisan,
  ProtocolStep,
  JournalPost,
  Testimonial,
  NavLink,
} from "./qasm-types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Excavations", href: "/archive" },
  { label: "Commission", href: "/encode" },
  { label: "Artisans", href: "/artisans" },
  { label: "About", href: "/about" },
];

export const artifacts: Artifact[] = [
  {
    id: "1",
    title: "Tree of Life Kimono Jacket",
    slug: "tree-of-life-kimono-jacket",
    collection: "Mesopotamian Collection",
    collectionSlug: "mesopotamian-collection",
    price: 1400,
    images: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1200&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    availability: "made_to_order",
    description: "Hand-embroidered kimono jacket featuring the Mesopotamian Tree of Life—the sacred tree connecting heaven and earth. Gold and emerald silk thread work with winged figures flanking the central motif.",
    materials: ["Black wool suiting", "Silk thread", "Gold zari"],
    techniques: ["Zardozi embroidery", "Gold bullion work"],
    artisan: "Master Rafiq Ahmed",
    leadTime: "6-8 weeks",
    featured: true,
    origin: {
      culture: "Mesopotamian",
      era: "3000 BCE",
      meaning: "Eternal life, divine connection, abundance"
    }
  },
  {
    id: "2",
    title: "Lotus Emergence Dress",
    slug: "lotus-emergence-dress",
    collection: "Egyptian Revival",
    collectionSlug: "egyptian-revival",
    price: 1650,
    images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop"],
    sizes: ["XS", "S", "M", "L"],
    availability: "made_to_order",
    description: "Sculptural draped dress featuring the Egyptian blue lotus rising from primordial waters. Each lotus is hand-embroidered in lapis blue and gold thread on cream Jamdani fabric.",
    materials: ["Handwoven Jamdani cotton", "Silk embroidery thread", "Gold thread"],
    techniques: ["Jamdani weaving", "Chain stitch embroidery"],
    artisan: "Weavers of Tangail",
    leadTime: "10-12 weeks",
    featured: true,
    origin: {
      culture: "Egyptian",
      era: "2000 BCE",
      meaning: "Rebirth, creation, the sun's journey"
    }
  },
  {
    id: "3",
    title: "Eternal Knot Overcoat",
    slug: "eternal-knot-overcoat",
    collection: "Celtic Mysteries",
    collectionSlug: "celtic-mysteries",
    price: 1800,
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    availability: "made_to_order",
    description: "Long structured overcoat with Celtic knotwork embroidered across shoulders and down the back. Silver thread creates interlocking loops with no beginning or end—symbols of eternity.",
    materials: ["Forest green wool", "Silver metallic thread", "Silk lining"],
    techniques: ["Chain stitch", "Couching"],
    artisan: "Master Amina Begum",
    leadTime: "8-10 weeks",
    featured: true,
    origin: {
      culture: "Celtic",
      era: "500 BCE",
      meaning: "Eternity, interconnection, cycles"
    }
  },
  {
    id: "4",
    title: "Serpent Wisdom Blazer",
    slug: "serpent-wisdom-blazer",
    collection: "Mesoamerican",
    collectionSlug: "mesoamerican",
    price: 1550,
    images: ["https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&h=1200&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    availability: "in_stock",
    description: "Oversized blazer featuring the feathered serpent Quetzalcoatl embroidered across the back. Turquoise, jade green, and gold thread work creates iridescent feather details.",
    materials: ["Midnight blue tropical suiting", "Silk thread", "Gold bullion"],
    techniques: ["Hand embroidery", "Padded satin stitch"],
    artisan: "Master Hussain Ali",
    leadTime: "6-8 weeks",
    featured: true,
    origin: {
      culture: "Mayan",
      era: "600 CE",
      meaning: "Wisdom, transformation, sky-earth bridge"
    }
  },
  {
    id: "5",
    title: "Sacred Garden Shirt",
    slug: "sacred-garden-shirt",
    collection: "Silk Road",
    collectionSlug: "silk-road",
    price: 890,
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1200&fit=crop"],
    sizes: ["S", "M", "L"],
    availability: "in_stock",
    description: "Flowing shirt featuring Persian Pairidaeza (paradise garden) embroidery. Multicolor silk threads depict stylized flowers, cypress trees, birds, and water channels.",
    materials: ["Ivory silk", "Silk embroidery thread"],
    techniques: ["Resham work", "Free-hand embroidery"],
    artisan: "Studio Collective",
    origin: {
      culture: "Persian",
      era: "1500 CE",
      meaning: "Heaven on earth, fertility, protection"
    }
  },
  {
    id: "6",
    title: "Scarab Protection Vest",
    slug: "scarab-protection-vest",
    collection: "Egyptian Revival",
    collectionSlug: "egyptian-revival",
    price: 720,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1200&fit=crop"],
    sizes: ["S", "M", "L"],
    availability: "in_stock",
    description: "Structured vest with a large scarab beetle embroidered on the back in gold bullion thread. The beetle pushes a sun disk in orange and gold gradient—an ancient talisman of protection.",
    materials: ["Black linen", "Gold bullion thread", "Silk thread"],
    techniques: ["Goldwork", "Padded embroidery"],
    artisan: "Master Amina Begum",
    origin: {
      culture: "Egyptian",
      era: "1500 BCE",
      meaning: "Protection, transformation, rebirth"
    }
  },
  {
    id: "7",
    title: "Byzantine Peacock Coat",
    slug: "byzantine-peacock-coat",
    collection: "Silk Road",
    collectionSlug: "silk-road",
    price: 2200,
    images: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=1200&fit=crop"],
    sizes: ["XS", "S", "M", "L"],
    availability: "pre_order",
    description: "Long flowing coat in deep purple velvet with Byzantine-style peacock embroidered in gold, turquoise, and sapphire thread. Tail feathers spread across the back in mosaic-like patterns.",
    materials: ["Purple velvet", "Gold thread", "Silk thread"],
    techniques: ["Zardozi", "Mosaic-style patterning"],
    artisan: "Master Rafiq Ahmed",
    leadTime: "10-12 weeks",
    origin: {
      culture: "Byzantine",
      era: "500 CE",
      meaning: "Immortality, beauty, divine protection"
    }
  },
  {
    id: "8",
    title: "Nordic Rune Hoodie",
    slug: "nordic-rune-hoodie",
    collection: "Northern Mysteries",
    collectionSlug: "northern-mysteries",
    price: 680,
    images: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=1200&fit=crop"],
    sizes: ["S", "M", "L", "XL"],
    availability: "in_stock",
    description: "Oversized hoodie with Elder Futhark runes embroidered down the back in bone-white thread. Vegvisir compass symbol on front, Yggdrasil branches on sleeves.",
    materials: ["Charcoal wool blend", "Cotton thread"],
    techniques: ["Chain stitch", "Cross stitch"],
    artisan: "Studio Collective",
    origin: {
      culture: "Norse",
      era: "800 CE",
      meaning: "Protection, guidance, ancient wisdom"
    }
  },
  {
    id: "9",
    title: "Indus Valley Seal Jacket",
    slug: "indus-valley-seal-jacket",
    collection: "Ancient Mysteries",
    collectionSlug: "ancient-mysteries",
    price: 1350,
    images: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1200&fit=crop"],
    sizes: ["S", "M", "L"],
    availability: "made_to_order",
    description: "Cropped boxy jacket in hand-dyed indigo cotton featuring Indus Valley seal motifs. Unicorn bull figure on back, geometric patterns on sleeves, Brahmi-inspired script border.",
    materials: ["Indigo hand-dyed cotton", "Cream silk thread", "Terracotta thread"],
    techniques: ["Aari embroidery", "Block printing"],
    artisan: "Master Hussain Ali",
    leadTime: "8-10 weeks",
    origin: {
      culture: "Indus Valley",
      era: "2500 BCE",
      meaning: "Mystery, sacred animals, ancient trade"
    }
  },
  {
    id: "10",
    title: "Ankh Eternity Dress",
    slug: "ankh-eternity-dress",
    collection: "Egyptian Revival",
    collectionSlug: "egyptian-revival",
    price: 1480,
    images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop"],
    sizes: ["XS", "S", "M", "L"],
    availability: "made_to_order",
    description: "Flowing maxi dress in papyrus gold silk with ankh symbols cascading down bodice and skirt. Each key of life is embroidered in lapis blue and gold thread.",
    materials: ["Gold silk", "Silk embroidery thread", "Gold thread"],
    techniques: ["Aari embroidery", "Couching"],
    artisan: "Weavers of Tangail",
    leadTime: "8-10 weeks",
    origin: {
      culture: "Egyptian",
      era: "3000 BCE",
      meaning: "Eternal life, divine power"
    }
  },
];

export const collections: Collection[] = [
  {
    id: "1",
    title: "Mesopotamian Collection",
    slug: "mesopotamian-collection",
    tagline: "Where civilization began",
    description: "Symbols from the cradle of civilization—Tree of Life motifs, winged deities, and Ishtar gate patterns. These ancient Sumerian and Babylonian symbols carried meaning for millennia.",
    heroImage: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&h=900&fit=crop",
    artifacts: artifacts.filter(a => a.collectionSlug === "mesopotamian-collection"),
  },
  {
    id: "2",
    title: "Egyptian Revival",
    slug: "egyptian-revival",
    tagline: "Pharaonic elegance reborn",
    description: "Lotus flowers rising from the Nile, scarab beetles pushing the sun, ankh keys unlocking eternity. Each symbol carried the weight of empire and the promise of afterlife.",
    heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop",
    artifacts: artifacts.filter(a => a.collectionSlug === "egyptian-revival"),
  },
  {
    id: "3",
    title: "Celtic Mysteries",
    slug: "celtic-mysteries",
    tagline: "Infinite loops, eternal wisdom",
    description: "Celtic knotwork has no beginning and no end—symbols of eternity carved into stone and now stitched into fabric. Spirals, triskeles, and endless interlace.",
    heroImage: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&h=900&fit=crop",
    artifacts: artifacts.filter(a => a.collectionSlug === "celtic-mysteries"),
  },
  {
    id: "4",
    title: "Silk Road",
    slug: "silk-road",
    tagline: "Where East meets West",
    description: "Persian gardens, Byzantine peacocks, and the treasures traded along ancient routes. These symbols traveled thousands of miles and centuries of time.",
    heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop",
    artifacts: artifacts.filter(a => a.collectionSlug === "silk-road"),
  },
  {
    id: "5",
    title: "Mesoamerican",
    slug: "mesoamerican",
    tagline: "Serpents and stars",
    description: "Feathered serpents, jaguar priests, and celestial calendars. The symbols of Maya, Aztec, and Olmec civilizations encoded cosmic wisdom in every curve.",
    heroImage: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&h=900&fit=crop",
    artifacts: artifacts.filter(a => a.collectionSlug === "mesoamerican"),
  },
];

export const artisans: Artisan[] = [
  {
    id: "1",
    name: "Master Rafiq Ahmed",
    craft: "Zardozi & Goldwork",
    region: "Kashmir, India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    bio: "Third-generation embroiderer specializing in Zardozi goldwork. Master Rafiq translates ancient Mesopotamian and Byzantine symbols into thread with techniques passed down through his family.",
    quote: "Every stitch is a prayer. Every ancient symbol, a conversation across millennia.",
    techniques: ["Zardozi", "Gold bullion", "Tilla work"],
    yearsOfExperience: 40,
  },
  {
    id: "2",
    name: "Amina Begum",
    craft: "Symbolic Embroidery",
    region: "Lucknow, India",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop",
    bio: "One of the few female masters of ceremonial embroidery. Amina specializes in Egyptian and Celtic motifs, bringing precision to complex knotwork and hieroglyphic patterns.",
    quote: "These symbols protected our ancestors. Now they protect those who wear them.",
    techniques: ["Chain stitch", "Couching", "Padded work"],
    yearsOfExperience: 35,
  },
  {
    id: "3",
    name: "Abdul Karim",
    craft: "Jamdani Weaving",
    region: "Tangail, Bangladesh",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop",
    bio: "Master weaver whose family has practiced Jamdani for seven generations. Abdul weaves ancient motifs directly into the fabric structure—each meter takes three days.",
    quote: "The loom remembers patterns older than written history.",
    techniques: ["Jamdani", "Muslin weaving"],
    yearsOfExperience: 45,
  },
  {
    id: "4",
    name: "Hussain Ali",
    craft: "Mixed Media Embroidery",
    region: "Jaipur, India",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop",
    bio: "Fourth-generation artisan combining block printing with embroidery. Hussain researches archaeological finds to accurately translate ancient symbols into wearable art.",
    quote: "Each symbol we stitch carried meaning for thousands of years. We are archaeologists of thread.",
    techniques: ["Block printing", "Aari embroidery", "Natural dyeing"],
    yearsOfExperience: 30,
  },
];

export const protocolSteps: ProtocolStep[] = [
  {
    number: 1,
    icon: "https://api.iconify.design/ph:magnifying-glass-light.svg",
    title: "Excavation",
    description: "Choose your dig site—culture, era, and symbols that resonate with your story. We present archaeological finds and their meanings.",
    days: "Days 1-5",
  },
  {
    number: 2,
    icon: "https://api.iconify.design/ph:pencil-line-light.svg",
    title: "Translation",
    description: "Our designers translate ancient symbols into embroidery patterns. Color palette chosen from natural dyes of the era.",
    days: "Days 6-12",
  },
  {
    number: 3,
    icon: "https://api.iconify.design/ph:swatches-light.svg",
    title: "Material Selection",
    description: "Choose fabrics that honor the symbol's origin. Each material connects to the culture's textile traditions.",
    days: "Days 13-18",
  },
  {
    number: 4,
    icon: "https://api.iconify.design/ph:scissors-light.svg",
    title: "Resurrection",
    description: "Master artisans bring your symbols to life. Each stitch is intentional, each motif placed with meaning.",
    days: "Days 19-38",
  },
  {
    number: 5,
    icon: "https://api.iconify.design/ph:package-light.svg",
    title: "Homecoming",
    description: "Your artifact arrives with Archaeological Certificate—documenting symbol origins, meanings, and artisan story.",
    days: "Days 39-44",
  },
];

export const journalPosts: JournalPost[] = [
  {
    id: "1",
    title: "Decoding the Tree of Life: From Mesopotamia to Modern Fashion",
    slug: "decoding-tree-of-life",
    excerpt: "The sacred tree appears in virtually every ancient culture. We trace its journey from Assyrian palaces to contemporary wardrobes.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=500&fit=crop",
    category: "Archaeology",
    publishedAt: "2024-11-15",
    readTime: "8 min",
  },
  {
    id: "2",
    title: "Why Ancient Symbols Still Protect Us",
    slug: "ancient-symbols-protection",
    excerpt: "From Egyptian scarabs to Nordic runes, protective symbols encoded beliefs about safety and power. Do they still work?",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop",
    category: "Philosophy",
    publishedAt: "2024-10-28",
    readTime: "5 min",
  },
  {
    id: "3",
    title: "The Lost Language of Celtic Knots",
    slug: "lost-language-celtic-knots",
    excerpt: "Each twist and turn of Celtic knotwork carried meaning. We excavate the visual grammar of the ancient Celts.",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&h=500&fit=crop",
    category: "Heritage",
    publishedAt: "2024-10-10",
    readTime: "6 min",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    quote: "As an archaeologist, I never expected to wear my field of study. The Tree of Life jacket connects me to the civilizations I've spent my career studying.",
    artifact: "Tree of Life Kimono Jacket",
  },
  {
    id: "2",
    name: "Marcus Williams",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    quote: "The co-creation process felt like an archaeological dig. I learned so much about my chosen symbols and the artisans bringing them to life.",
    artifact: "Serpent Wisdom Blazer",
  },
  {
    id: "3",
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    quote: "Wearing the Lotus dress feels like carrying centuries of meaning. People ask about the symbols, and I love telling their stories.",
    artifact: "Lotus Emergence Dress",
  },
];

export const featuredArtifacts = artifacts.filter(a => a.featured);
