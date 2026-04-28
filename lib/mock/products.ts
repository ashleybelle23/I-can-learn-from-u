import { Product } from '@/lib/types';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    slug: 'tibetan-singing-bowl',
    name: 'Hand-Hammered Tibetan Singing Bowl',
    description:
      'Crafted by artisans in the Kathmandu Valley, this 7-metal singing bowl produces rich, resonant tones used in Buddhist meditation, sound healing, and mindfulness practice. Each bowl is unique — slight variations in tone and texture are marks of its handmade origin.',
    origin: 'Kathmandu Valley, Nepal',
    culturalContext:
      'Singing bowls have been used in Himalayan Buddhist and Hindu traditions for centuries as tools for meditation, ritual, and healing. The vibrational frequencies are believed to promote deep relaxation and rebalance the nervous system.',
    price: 68,
    imageUrl: '/products/singing-bowl.jpg',
    category: 'Sound & Vibration',
    communityImpactNote: '15% of proceeds go to the Himalayan Artisan Preservation Fund.',
    inStock: true,
    featured: true,
    tags: ['meditation', 'sound healing', 'Nepal', 'mindfulness'],
  },
  {
    id: 'p2',
    slug: 'natural-cork-yoga-mat',
    name: 'Natural Cork & Rubber Yoga Mat',
    description:
      'Made from sustainably harvested cork and natural tree rubber, this mat provides excellent grip, natural antimicrobial properties, and a connection to earth that synthetic mats cannot replicate. Designed for yoga, meditation, and somatic movement practice.',
    origin: 'Portugal (cork) × Kerala, India (rubber)',
    culturalContext:
      'Yoga is a 5,000-year-old practice from the Indian subcontinent. Cork has been sustainably harvested in the Iberian Peninsula for centuries without cutting the trees. This mat honors both origins.',
    price: 98,
    imageUrl: '/products/yoga-mat.jpg',
    category: 'Movement & Practice',
    communityImpactNote: '10% supports rural cork farming cooperatives in Portugal.',
    inStock: true,
    featured: false,
    tags: ['yoga', 'sustainability', 'movement', 'cork'],
  },
  {
    id: 'p3',
    slug: 'weighted-comfort-blanket',
    name: 'Weighted Comfort Blanket — 15lb',
    description:
      'A therapeutic weighted blanket designed for anxiety, sensory regulation, and nervous system support. Filled with glass beads for even weight distribution, covered in organic cotton. Often recommended for trauma survivors, those with anxiety, and anyone whose nervous system needs gentling.',
    origin: 'Manufactured in India with organic cotton from Gujarat',
    culturalContext:
      'Weighted blankets draw from occupational therapy research on deep pressure stimulation — a technique also present in traditional swaddling practices across many cultures for thousands of years.',
    price: 89,
    imageUrl: '/products/weighted-blanket.jpg',
    category: 'Rest & Nervous System',
    communityImpactNote: '12% goes to mental health accessibility programs in Gujarat.',
    inStock: true,
    featured: false,
    tags: ['anxiety', 'trauma', 'sleep', 'nervous system', 'sensory'],
  },
  {
    id: 'p4',
    slug: 'zafu-meditation-cushion',
    name: 'Zafu Meditation Cushion — Buckwheat',
    description:
      'A traditional Japanese zafu meditation cushion, filled with organic buckwheat hulls that conform to your body and provide stable, comfortable support for long sits. The round form elevates the hips and encourages natural spinal alignment during seated practice.',
    origin: 'Handmade in Kyoto, Japan',
    culturalContext:
      'The zafu (坐蒲) has been used in Zen Buddhist meditation practice for over 1,000 years. The buckwheat filling is traditional and regulates temperature naturally, keeping you cool or warm as needed.',
    price: 74,
    imageUrl: '/products/zafu-cushion.jpg',
    category: 'Meditation',
    communityImpactNote: '10% supports Zen meditation center scholarship programs.',
    inStock: true,
    featured: false,
    tags: ['zen', 'meditation', 'Japan', 'sitting practice'],
  },
  {
    id: 'p5',
    slug: 'japanese-brass-incense-holder',
    name: 'Brass Boat Incense Holder',
    description:
      'A minimalist brass incense holder in traditional Japanese boat form, designed to catch ash cleanly and allow incense smoke to rise freely. Suitable for stick incense in meditation, ritual, or simply creating a contemplative atmosphere.',
    origin: 'Sakai, Osaka, Japan',
    culturalContext:
      'Incense burning (kōdō, or the "way of incense") is a meditative Japanese art form with roots in the introduction of Buddhism to Japan in the 6th century. Sakai is historically famous for its metalwork craft traditions.',
    price: 34,
    imageUrl: '/products/incense-holder.jpg',
    category: 'Ritual & Altar',
    communityImpactNote: '15% supports traditional craft apprenticeship programs in Sakai.',
    inStock: true,
    featured: false,
    tags: ['incense', 'ritual', 'Japan', 'altar', 'meditation'],
  },
  {
    id: 'p6',
    slug: 'the-tao-of-pooh-philosophy-book',
    name: 'Philosophy Collection: The Tao, Stoics, and Zen',
    description:
      'A curated bundle of three formative texts in Eastern and Western contemplative philosophy: the Tao Te Ching (translated by Stephen Mitchell), Meditations by Marcus Aurelius, and Zen Mind, Beginner\'s Mind by Shunryu Suzuki. Three paths, one invitation: to be present.',
    origin: 'Global traditions — Taoist, Stoic, Zen',
    culturalContext:
      'These three texts represent living philosophical traditions that have guided billions of people across centuries in how to bear suffering, cultivate presence, and live meaningfully. Each is accessible to beginners and inexhaustibly deep.',
    price: 52,
    imageUrl: '/products/philosophy-books.jpg',
    category: 'Books & Learning',
    communityImpactNote: '20% is donated to prison library literacy programs.',
    inStock: true,
    featured: true,
    tags: ['philosophy', 'Taoism', 'Stoicism', 'Zen', 'books'],
  },
  {
    id: 'p7',
    slug: 'handmade-linen-journal',
    name: 'Handmade Linen Journal — Unlined',
    description:
      'A beautiful, unlined journal with a handmade linen cover and 200 pages of acid-free cream paper. Made by a small family bindery. Perfect for morning pages, reflection prompts, dream journaling, or creative expression during healing.',
    origin: 'Oaxaca, Mexico',
    culturalContext:
      'Journaling as a healing practice has roots in many traditions — from the Stoic practice of daily reflection to Indigenous storytelling. This journal is unlined to leave your expression completely free.',
    price: 38,
    imageUrl: '/products/journal.jpg',
    category: 'Books & Learning',
    communityImpactNote: '15% supports the Oaxacan bindery workers\' cooperative.',
    inStock: true,
    featured: false,
    tags: ['journaling', 'writing', 'healing', 'creativity', 'Mexico'],
  },
  {
    id: 'p8',
    slug: 'ceremonial-loose-leaf-tea-set',
    name: 'Ceremonial Tea Set — Gongfu Style',
    description:
      'A complete gongfu cha (功夫茶) tea set including a Yixing clay teapot, four small cups, a tea tray, and 50g of single-origin Oolong. Brewing tea slowly, with attention, is itself a meditation practice.',
    origin: 'Chaozhou, Guangdong Province, China',
    culturalContext:
      'Gongfu cha ("making tea with skill") is a Chinese tea ceremony tradition that emphasizes presence, slowness, and sensory attention. It is considered both an art form and a meditative practice.',
    price: 86,
    imageUrl: '/products/tea-set.jpg',
    category: 'Ritual & Altar',
    communityImpactNote: '12% supports small-scale tea farmers in Chaozhou.',
    inStock: true,
    featured: false,
    tags: ['tea', 'ritual', 'China', 'mindfulness', 'ceremony'],
  },
  {
    id: 'p9',
    slug: 'bolivian-handwoven-textile',
    name: 'Bolivian Handwoven Wool Textile',
    description:
      'Woven by Quechua artisans in the Bolivian Andes using traditional back-strap loom techniques, this textile features geometric patterns that encode cosmological stories. Each piece is unique, woven from natural dye wool, and takes 2–3 weeks to complete.',
    origin: 'Potosí region, Bolivia',
    culturalContext:
      'Andean textile weaving is a sacred practice that has survived colonization. Each pattern carries meaning — stories about mountains, water, ancestors, and time. By buying this piece, you support a living tradition.',
    price: 120,
    imageUrl: '/products/woven-textile.jpg',
    category: 'Home & Sacred Space',
    communityImpactNote: '25% returns directly to the Quechua weaving cooperative in Potosí.',
    inStock: true,
    featured: false,
    tags: ['textile', 'Andean', 'Bolivia', 'handwoven', 'sacred'],
  },
  {
    id: 'p10',
    slug: 'beeswax-ritual-candles',
    name: 'Beeswax Ritual Candles — Set of 4',
    description:
      'Handmade beeswax pillar candles, unscented or lightly scented with pure frankincense resin. Beeswax burns cleanly and purifies air as it does. Used for altar work, ritual, and creating intentional atmosphere.',
    origin: 'Small-batch, ethically sourced beeswax from family apiaries in Ethiopia',
    culturalContext:
      'Candle flame has been a symbol of the soul, of prayer, and of presence across virtually every spiritual tradition on Earth. Ethiopian beeswax is some of the purest in the world.',
    price: 44,
    imageUrl: '/products/ritual-candles.jpg',
    category: 'Ritual & Altar',
    communityImpactNote: '15% supports rural beekeeping families in Oromia, Ethiopia.',
    inStock: true,
    featured: false,
    tags: ['candles', 'ritual', 'Ethiopia', 'altar', 'beeswax'],
  },
];

export const mockProductCategories = [
  'All',
  'Sound & Vibration',
  'Movement & Practice',
  'Rest & Nervous System',
  'Meditation',
  'Ritual & Altar',
  'Books & Learning',
  'Home & Sacred Space',
] as const;
