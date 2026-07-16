import { taxonomy, type TaxonomyCategory } from "./taxonomy";

export type Category = TaxonomyCategory;

export const categories: Category[] = taxonomy;

export const crops = [
  {
    slug: "cotton",
    name: "Cotton",
    season: "Kharif",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80",
  },
];

export type Product = {
  slug: string;
  sku: string;
  name: string;
  brand: string;
  category: string;
  crop: string[];
  short: string;
  description: string;
  mrp: number;
  price: number;
  packSize: string;
  rating: number;
  reviews: number;
  stock: "in" | "low" | "out";
  badges: string[];
  benefits: string[];
  usage: string;
  specs: Record<string, string>;
  image: string;
  images: string[];
};

export const products: Product[] = [
  {
  slug: "cauliflower-seeds",
  sku: "SA-SEE-9075",
  name: "Cauliflower Seeds",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "seeds",
  crop: ["tomato", "wheat"],
  short: "Premium Cauliflower Seeds for optimal results.",
  description: "High quality Cauliflower Seeds designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 824,
  price: 700,
  packSize: "Standard",
  rating: 4.5,
  reviews: 52,
  stock: "in",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
  "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Seeds",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "cotton-seeds",
  sku: "SA-SEE-4222",
  name: "Cotton Seeds",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "seeds",
  crop: ["tomato", "wheat"],
  short: "Premium Cotton Seeds for optimal results.",
  description: "High quality Cotton Seeds designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 821,
  price: 697,
  packSize: "Standard",
  rating: 4.5,
  reviews: 208,
  stock: "in",
  image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Seeds",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "systemic-insecticide",
  sku: "SA-CRO-718",
  name: "Systemic Insecticide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Systemic Insecticide for optimal results.",
  description: "High quality Systemic Insecticide designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1020,
  price: 867,
  packSize: "Standard",
  rating: 4.5,
  reviews: 222,
  stock: "in",
  image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "contact-insecticide",
  sku: "SA-CRO-7719",
  name: "Contact Insecticide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Contact Insecticide for optimal results.",
  description: "High quality Contact Insecticide designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1602,
  price: 1361,
  packSize: "Standard",
  rating: 4.5,
  reviews: 19,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "broad-spectrum-fungicide",
  sku: "SA-CRO-4974",
  name: "Broad Spectrum Fungicide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Broad Spectrum Fungicide for optimal results.",
  description: "High quality Broad Spectrum Fungicide designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1154,
  price: 980,
  packSize: "Standard",
  rating: 4.5,
  reviews: 39,
  stock: "in",
  image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "copper-fungicide",
  sku: "SA-CRO-4136",
  name: "Copper Fungicide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Copper Fungicide for optimal results.",
  description: "High quality Copper Fungicide designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1297,
  price: 1102,
  packSize: "Standard",
  rating: 4.5,
  reviews: 100,
  stock: "in",
  image: "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "selective-herbicide",
  sku: "SA-CRO-5393",
  name: "Selective Herbicide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Selective Herbicide for optimal results.",
  description: "High quality Selective Herbicide designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1377,
  price: 1170,
  packSize: "Standard",
  rating: 4.5,
  reviews: 289,
  stock: "in",
  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "non-selective-herbicide",
  sku: "SA-CRO-2102",
  name: "Non-Selective Herbicide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Non-Selective Herbicide for optimal results.",
  description: "High quality Non-Selective Herbicide designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1358,
  price: 1154,
  packSize: "Standard",
  rating: 4.5,
  reviews: 156,
  stock: "in",
  image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "bio-insecticide",
  sku: "SA-CRO-7185",
  name: "Bio Insecticide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Bio Insecticide for optimal results.",
  description: "High quality Bio Insecticide designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2425,
  price: 2061,
  packSize: "Standard",
  rating: 4.5,
  reviews: 320,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "bio-fungicide",
  sku: "SA-CRO-815",
  name: "Bio Fungicide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Bio Fungicide for optimal results.",
  description: "High quality Bio Fungicide designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1469,
  price: 1248,
  packSize: "Standard",
  rating: 4.5,
  reviews: 339,
  stock: "in",
  image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "bio-nematicide",
  sku: "SA-CRO-3993",
  name: "Bio Nematicide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Bio Nematicide for optimal results.",
  description: "High quality Bio Nematicide designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2265,
  price: 1925,
  packSize: "Standard",
  rating: 4.5,
  reviews: 461,
  stock: "in",
  image: "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "bio-miticide",
  sku: "SA-CRO-4988",
  name: "Bio Miticide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Bio Miticide for optimal results.",
  description: "High quality Bio Miticide designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1492,
  price: 1268,
  packSize: "Standard",
  rating: 4.5,
  reviews: 350,
  stock: "in",
  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "neem-oil-spray",
  sku: "SA-CRO-669",
  name: "Neem Oil Spray",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Neem Oil Spray for optimal results.",
  description: "High quality Neem Oil Spray designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2148,
  price: 1825,
  packSize: "Standard",
  rating: 4.5,
  reviews: 321,
  stock: "in",
  image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "sticky-trap-pack",
  sku: "SA-CRO-1461",
  name: "Sticky Trap Pack",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Sticky Trap Pack for optimal results.",
  description: "High quality Sticky Trap Pack designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1304,
  price: 1108,
  packSize: "Standard",
  rating: 4.5,
  reviews: 50,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "pheromone-trap",
  sku: "SA-CRO-364",
  name: "Pheromone Trap",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Pheromone Trap for optimal results.",
  description: "High quality Pheromone Trap designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 894,
  price: 759,
  packSize: "Standard",
  rating: 4.5,
  reviews: 190,
  stock: "in",
  image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "pheromone-lure",
  sku: "SA-CRO-4011",
  name: "Pheromone Lure",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Pheromone Lure for optimal results.",
  description: "High quality Pheromone Lure designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2296,
  price: 1951,
  packSize: "Standard",
  rating: 4.5,
  reviews: 253,
  stock: "in",
  image: "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plant-growth-protector",
  sku: "SA-CRO-595",
  name: "Plant Growth Protector",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Plant Growth Protector for optimal results.",
  description: "High quality Plant Growth Protector designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1243,
  price: 1056,
  packSize: "Standard",
  rating: 4.5,
  reviews: 264,
  stock: "in",
  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "bactericide-spray",
  sku: "SA-CRO-8334",
  name: "Bactericide Spray",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Bactericide Spray for optimal results.",
  description: "High quality Bactericide Spray designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1110,
  price: 943,
  packSize: "Standard",
  rating: 4.5,
  reviews: 191,
  stock: "in",
  image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "miticide-concentrate",
  sku: "SA-CRO-4219",
  name: "Miticide Concentrate",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Miticide Concentrate for optimal results.",
  description: "High quality Miticide Concentrate designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1784,
  price: 1516,
  packSize: "Standard",
  rating: 4.5,
  reviews: 37,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "rodent-control-bait",
  sku: "SA-CRO-5162",
  name: "Rodent Control Bait",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Rodent Control Bait for optimal results.",
  description: "High quality Rodent Control Bait designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2000,
  price: 1700,
  packSize: "Standard",
  rating: 4.5,
  reviews: 372,
  stock: "in",
  image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "snail-slug-control",
  sku: "SA-CRO-2494",
  name: "Snail & Slug Control",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Snail & Slug Control for optimal results.",
  description: "High quality Snail & Slug Control designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1638,
  price: 1392,
  packSize: "Standard",
  rating: 4.5,
  reviews: 406,
  stock: "in",
  image: "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "crop-protection-adjuvant",
  sku: "SA-CRO-6114",
  name: "Crop Protection Adjuvant",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["tomato", "wheat"],
  short: "Premium Crop Protection Adjuvant for optimal results.",
  description: "High quality Crop Protection Adjuvant designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1334,
  price: 1133,
  packSize: "Standard",
  rating: 4.5,
  reviews: 376,
  stock: "in",
  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Crop Protection",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "npk-19-19-19-fertilizer",
  sku: "SA-FER-2079",
  name: "NPK 19:19:19 Fertilizer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium NPK 19:19:19 Fertilizer for optimal results.",
  description: "High quality NPK 19:19:19 Fertilizer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 572,
  price: 486,
  packSize: "Standard",
  rating: 4.5,
  reviews: 162,
  stock: "in",
  image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "npk-20-20-20-fertilizer",
  sku: "SA-FER-4978",
  name: "NPK 20:20:20 Fertilizer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium NPK 20:20:20 Fertilizer for optimal results.",
  description: "High quality NPK 20:20:20 Fertilizer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2282,
  price: 1939,
  packSize: "Standard",
  rating: 4.5,
  reviews: 311,
  stock: "in",
  image: "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "urea-fertilizer",
  sku: "SA-FER-9948",
  name: "Urea Fertilizer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Urea Fertilizer for optimal results.",
  description: "High quality Urea Fertilizer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1575,
  price: 1338,
  packSize: "Standard",
  rating: 4.5,
  reviews: 55,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "dap-fertilizer",
  sku: "SA-FER-2202",
  name: "DAP Fertilizer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium DAP Fertilizer for optimal results.",
  description: "High quality DAP Fertilizer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1192,
  price: 1013,
  packSize: "Standard",
  rating: 4.5,
  reviews: 294,
  stock: "in",
  image: "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "mop-fertilizer",
  sku: "SA-FER-1763",
  name: "MOP Fertilizer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium MOP Fertilizer for optimal results.",
  description: "High quality MOP Fertilizer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 606,
  price: 515,
  packSize: "Standard",
  rating: 4.5,
  reviews: 202,
  stock: "in",
  image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "ssp-fertilizer",
  sku: "SA-FER-4883",
  name: "SSP Fertilizer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium SSP Fertilizer for optimal results.",
  description: "High quality SSP Fertilizer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 673,
  price: 572,
  packSize: "Standard",
  rating: 4.5,
  reviews: 217,
  stock: "in",
  image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "zinc-sulphate",
  sku: "SA-FER-2179",
  name: "Zinc Sulphate",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Zinc Sulphate for optimal results.",
  description: "High quality Zinc Sulphate designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1385,
  price: 1177,
  packSize: "Standard",
  rating: 4.5,
  reviews: 402,
  stock: "in",
  image: "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "magnesium-sulphate",
  sku: "SA-FER-11",
  name: "Magnesium Sulphate",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Magnesium Sulphate for optimal results.",
  description: "High quality Magnesium Sulphate designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2133,
  price: 1813,
  packSize: "Standard",
  rating: 4.5,
  reviews: 210,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "calcium-nitrate",
  sku: "SA-FER-5243",
  name: "Calcium Nitrate",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Calcium Nitrate for optimal results.",
  description: "High quality Calcium Nitrate designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 542,
  price: 460,
  packSize: "Standard",
  rating: 4.5,
  reviews: 305,
  stock: "in",
  image: "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "boron-fertilizer",
  sku: "SA-FER-3867",
  name: "Boron Fertilizer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Boron Fertilizer for optimal results.",
  description: "High quality Boron Fertilizer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 929,
  price: 789,
  packSize: "Standard",
  rating: 4.5,
  reviews: 342,
  stock: "in",
  image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "humic-acid",
  sku: "SA-FER-3721",
  name: "Humic Acid",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Humic Acid for optimal results.",
  description: "High quality Humic Acid designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 611,
  price: 519,
  packSize: "Standard",
  rating: 4.5,
  reviews: 91,
  stock: "in",
  image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "fulvic-acid",
  sku: "SA-FER-4652",
  name: "Fulvic Acid",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Fulvic Acid for optimal results.",
  description: "High quality Fulvic Acid designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2059,
  price: 1750,
  packSize: "Standard",
  rating: 4.5,
  reviews: 356,
  stock: "in",
  image: "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "seaweed-extract",
  sku: "SA-FER-313",
  name: "Seaweed Extract",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Seaweed Extract for optimal results.",
  description: "High quality Seaweed Extract designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1236,
  price: 1050,
  packSize: "Standard",
  rating: 4.5,
  reviews: 79,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "vermicompost",
  sku: "SA-FER-3352",
  name: "Vermicompost",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Vermicompost for optimal results.",
  description: "High quality Vermicompost designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2418,
  price: 2055,
  packSize: "Standard",
  rating: 4.5,
  reviews: 318,
  stock: "in",
  image: "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "organic-compost",
  sku: "SA-FER-6357",
  name: "Organic Compost",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Organic Compost for optimal results.",
  description: "High quality Organic Compost designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2436,
  price: 2070,
  packSize: "Standard",
  rating: 4.5,
  reviews: 16,
  stock: "in",
  image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "bio-fertilizer",
  sku: "SA-FER-2546",
  name: "Bio Fertilizer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Bio Fertilizer for optimal results.",
  description: "High quality Bio Fertilizer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 683,
  price: 580,
  packSize: "Standard",
  rating: 4.5,
  reviews: 229,
  stock: "in",
  image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "water-soluble-fertilizer",
  sku: "SA-FER-3224",
  name: "Water Soluble Fertilizer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Water Soluble Fertilizer for optimal results.",
  description: "High quality Water Soluble Fertilizer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1927,
  price: 1637,
  packSize: "Standard",
  rating: 4.5,
  reviews: 425,
  stock: "in",
  image: "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "micronutrient-mix",
  sku: "SA-FER-4070",
  name: "Micronutrient Mix",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Micronutrient Mix for optimal results.",
  description: "High quality Micronutrient Mix designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2420,
  price: 2057,
  packSize: "Standard",
  rating: 4.5,
  reviews: 368,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "silicon-booster",
  sku: "SA-FER-8361",
  name: "Silicon Booster",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Silicon Booster for optimal results.",
  description: "High quality Silicon Booster designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 700,
  price: 595,
  packSize: "Standard",
  rating: 4.5,
  reviews: 81,
  stock: "in",
  image: "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "soil-conditioner",
  sku: "SA-FER-6834",
  name: "Soil Conditioner",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "wheat"],
  short: "Premium Soil Conditioner for optimal results.",
  description: "High quality Soil Conditioner designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1171,
  price: 995,
  packSize: "Standard",
  rating: 4.5,
  reviews: 490,
  stock: "in",
  image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Fertilizers",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plant-growth-promoter",
  sku: "SA-PLA-7897",
  name: "Plant Growth Promoter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Plant Growth Promoter for optimal results.",
  description: "High quality Plant Growth Promoter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2199,
  price: 1869,
  packSize: "Standard",
  rating: 4.5,
  reviews: 426,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "root-booster",
  sku: "SA-PLA-7896",
  name: "Root Booster",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Root Booster for optimal results.",
  description: "High quality Root Booster designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 820,
  price: 697,
  packSize: "Standard",
  rating: 4.5,
  reviews: 112,
  stock: "in",
  image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "flower-booster",
  sku: "SA-PLA-3756",
  name: "Flower Booster",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Flower Booster for optimal results.",
  description: "High quality Flower Booster designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1362,
  price: 1157,
  packSize: "Standard",
  rating: 4.5,
  reviews: 319,
  stock: "in",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "fruit-booster",
  sku: "SA-PLA-1605",
  name: "Fruit Booster",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Fruit Booster for optimal results.",
  description: "High quality Fruit Booster designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 995,
  price: 845,
  packSize: "Standard",
  rating: 4.5,
  reviews: 262,
  stock: "in",
  image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "yield-booster",
  sku: "SA-PLA-5862",
  name: "Yield Booster",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Yield Booster for optimal results.",
  description: "High quality Yield Booster designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2059,
  price: 1750,
  packSize: "Standard",
  rating: 4.5,
  reviews: 125,
  stock: "in",
  image: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "bio-stimulant",
  sku: "SA-PLA-1996",
  name: "Bio Stimulant",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Bio Stimulant for optimal results.",
  description: "High quality Bio Stimulant designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1334,
  price: 1133,
  packSize: "Standard",
  rating: 4.5,
  reviews: 16,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "amino-acid-solution",
  sku: "SA-PLA-9302",
  name: "Amino Acid Solution",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Amino Acid Solution for optimal results.",
  description: "High quality Amino Acid Solution designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1307,
  price: 1110,
  packSize: "Standard",
  rating: 4.5,
  reviews: 423,
  stock: "in",
  image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "seaweed-growth-promoter",
  sku: "SA-PLA-9670",
  name: "Seaweed Growth Promoter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Seaweed Growth Promoter for optimal results.",
  description: "High quality Seaweed Growth Promoter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 697,
  price: 592,
  packSize: "Standard",
  rating: 4.5,
  reviews: 29,
  stock: "in",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plant-enhancer",
  sku: "SA-PLA-1735",
  name: "Plant Enhancer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Plant Enhancer for optimal results.",
  description: "High quality Plant Enhancer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1023,
  price: 869,
  packSize: "Standard",
  rating: 4.5,
  reviews: 481,
  stock: "in",
  image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "root-activator",
  sku: "SA-PLA-9551",
  name: "Root Activator",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Root Activator for optimal results.",
  description: "High quality Root Activator designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1034,
  price: 878,
  packSize: "Standard",
  rating: 4.5,
  reviews: 494,
  stock: "in",
  image: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "flowering-spray",
  sku: "SA-PLA-3436",
  name: "Flowering Spray",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Flowering Spray for optimal results.",
  description: "High quality Flowering Spray designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 831,
  price: 706,
  packSize: "Standard",
  rating: 4.5,
  reviews: 175,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "stress-relief-formula",
  sku: "SA-PLA-2400",
  name: "Stress Relief Formula",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Stress Relief Formula for optimal results.",
  description: "High quality Stress Relief Formula designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1456,
  price: 1237,
  packSize: "Standard",
  rating: 4.5,
  reviews: 349,
  stock: "in",
  image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "crop-vitalizer",
  sku: "SA-PLA-9745",
  name: "Crop Vitalizer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Crop Vitalizer for optimal results.",
  description: "High quality Crop Vitalizer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 714,
  price: 606,
  packSize: "Standard",
  rating: 4.5,
  reviews: 180,
  stock: "in",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plant-tonic",
  sku: "SA-PLA-9706",
  name: "Plant Tonic",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Plant Tonic for optimal results.",
  description: "High quality Plant Tonic designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1984,
  price: 1686,
  packSize: "Standard",
  rating: 4.5,
  reviews: 450,
  stock: "in",
  image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "fruit-size-enhancer",
  sku: "SA-PLA-2582",
  name: "Fruit Size Enhancer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Fruit Size Enhancer for optimal results.",
  description: "High quality Fruit Size Enhancer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1284,
  price: 1091,
  packSize: "Standard",
  rating: 4.5,
  reviews: 178,
  stock: "in",
  image: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "chlorophyll-booster",
  sku: "SA-PLA-7378",
  name: "Chlorophyll Booster",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Chlorophyll Booster for optimal results.",
  description: "High quality Chlorophyll Booster designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1137,
  price: 966,
  packSize: "Standard",
  rating: 4.5,
  reviews: 412,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "growth-regulator",
  sku: "SA-PLA-4304",
  name: "Growth Regulator",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Growth Regulator for optimal results.",
  description: "High quality Growth Regulator designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2152,
  price: 1829,
  packSize: "Standard",
  rating: 4.5,
  reviews: 82,
  stock: "in",
  image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "soil-activator",
  sku: "SA-PLA-4870",
  name: "Soil Activator",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Soil Activator for optimal results.",
  description: "High quality Soil Activator designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1714,
  price: 1456,
  packSize: "Standard",
  rating: 4.5,
  reviews: 281,
  stock: "in",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "crop-booster-liquid",
  sku: "SA-PLA-8880",
  name: "Crop Booster Liquid",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Crop Booster Liquid for optimal results.",
  description: "High quality Crop Booster Liquid designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1856,
  price: 1577,
  packSize: "Standard",
  rating: 4.5,
  reviews: 238,
  stock: "in",
  image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "bio-growth-formula",
  sku: "SA-PLA-8909",
  name: "Bio Growth Formula",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "plant-growth",
  crop: ["tomato", "wheat"],
  short: "Premium Bio Growth Formula for optimal results.",
  description: "High quality Bio Growth Formula designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 923,
  price: 784,
  packSize: "Standard",
  rating: 4.5,
  reviews: 336,
  stock: "in",
  image: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Plant Growth",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "battery-sprayer",
  sku: "SA-FAR-7070",
  name: "Battery Sprayer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Battery Sprayer for optimal results.",
  description: "High quality Battery Sprayer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2147,
  price: 1824,
  packSize: "Standard",
  rating: 4.5,
  reviews: 257,
  stock: "in",
  image: "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "manual-sprayer",
  sku: "SA-FAR-5188",
  name: "Manual Sprayer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Manual Sprayer for optimal results.",
  description: "High quality Manual Sprayer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1698,
  price: 1443,
  packSize: "Standard",
  rating: 4.5,
  reviews: 48,
  stock: "in",
  image: "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "power-sprayer",
  sku: "SA-FAR-7955",
  name: "Power Sprayer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Power Sprayer for optimal results.",
  description: "High quality Power Sprayer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 519,
  price: 441,
  packSize: "Standard",
  rating: 4.5,
  reviews: 388,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "knapsack-sprayer",
  sku: "SA-FAR-4221",
  name: "Knapsack Sprayer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Knapsack Sprayer for optimal results.",
  description: "High quality Knapsack Sprayer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1322,
  price: 1123,
  packSize: "Standard",
  rating: 4.5,
  reviews: 387,
  stock: "in",
  image: "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "brush-cutter",
  sku: "SA-FAR-712",
  name: "Brush Cutter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Brush Cutter for optimal results.",
  description: "High quality Brush Cutter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1057,
  price: 898,
  packSize: "Standard",
  rating: 4.5,
  reviews: 162,
  stock: "in",
  image: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "power-weeder",
  sku: "SA-FAR-2882",
  name: "Power Weeder",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Power Weeder for optimal results.",
  description: "High quality Power Weeder designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1647,
  price: 1399,
  packSize: "Standard",
  rating: 4.5,
  reviews: 247,
  stock: "in",
  image: "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "mini-tiller",
  sku: "SA-FAR-7656",
  name: "Mini Tiller",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Mini Tiller for optimal results.",
  description: "High quality Mini Tiller designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1575,
  price: 1338,
  packSize: "Standard",
  rating: 4.5,
  reviews: 240,
  stock: "in",
  image: "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "earth-auger",
  sku: "SA-FAR-1058",
  name: "Earth Auger",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Earth Auger for optimal results.",
  description: "High quality Earth Auger designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1046,
  price: 889,
  packSize: "Standard",
  rating: 4.5,
  reviews: 460,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "chain-saw",
  sku: "SA-FAR-8595",
  name: "Chain Saw",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Chain Saw for optimal results.",
  description: "High quality Chain Saw designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2118,
  price: 1800,
  packSize: "Standard",
  rating: 4.5,
  reviews: 72,
  stock: "in",
  image: "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "hedge-trimmer",
  sku: "SA-FAR-670",
  name: "Hedge Trimmer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Hedge Trimmer for optimal results.",
  description: "High quality Hedge Trimmer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 865,
  price: 735,
  packSize: "Standard",
  rating: 4.5,
  reviews: 154,
  stock: "in",
  image: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "rice-transplanter",
  sku: "SA-FAR-6324",
  name: "Rice Transplanter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Rice Transplanter for optimal results.",
  description: "High quality Rice Transplanter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 835,
  price: 709,
  packSize: "Standard",
  rating: 4.5,
  reviews: 46,
  stock: "in",
  image: "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "seed-drill",
  sku: "SA-FAR-5627",
  name: "Seed Drill",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Seed Drill for optimal results.",
  description: "High quality Seed Drill designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 651,
  price: 553,
  packSize: "Standard",
  rating: 4.5,
  reviews: 91,
  stock: "in",
  image: "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "chaff-cutter",
  sku: "SA-FAR-3282",
  name: "Chaff Cutter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Chaff Cutter for optimal results.",
  description: "High quality Chaff Cutter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 910,
  price: 773,
  packSize: "Standard",
  rating: 4.5,
  reviews: 166,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "sugarcane-cutter",
  sku: "SA-FAR-7699",
  name: "Sugarcane Cutter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Sugarcane Cutter for optimal results.",
  description: "High quality Sugarcane Cutter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1209,
  price: 1027,
  packSize: "Standard",
  rating: 4.5,
  reviews: 355,
  stock: "in",
  image: "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "garden-shredder",
  sku: "SA-FAR-8845",
  name: "Garden Shredder",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Garden Shredder for optimal results.",
  description: "High quality Garden Shredder designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1471,
  price: 1250,
  packSize: "Standard",
  rating: 4.5,
  reviews: 391,
  stock: "in",
  image: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "mini-cultivator",
  sku: "SA-FAR-1508",
  name: "Mini Cultivator",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Mini Cultivator for optimal results.",
  description: "High quality Mini Cultivator designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2342,
  price: 1990,
  packSize: "Standard",
  rating: 4.5,
  reviews: 67,
  stock: "in",
  image: "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "fruit-harvester",
  sku: "SA-FAR-6920",
  name: "Fruit Harvester",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Fruit Harvester for optimal results.",
  description: "High quality Fruit Harvester designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 761,
  price: 646,
  packSize: "Standard",
  rating: 4.5,
  reviews: 276,
  stock: "in",
  image: "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "hand-weeder",
  sku: "SA-FAR-6746",
  name: "Hand Weeder",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Hand Weeder for optimal results.",
  description: "High quality Hand Weeder designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1558,
  price: 1324,
  packSize: "Standard",
  rating: 4.5,
  reviews: 175,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "lawn-mower",
  sku: "SA-FAR-6088",
  name: "Lawn Mower",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Lawn Mower for optimal results.",
  description: "High quality Lawn Mower designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2118,
  price: 1800,
  packSize: "Standard",
  rating: 4.5,
  reviews: 486,
  stock: "in",
  image: "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "solar-dryer",
  sku: "SA-FAR-1702",
  name: "Solar Dryer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["tomato", "wheat"],
  short: "Premium Solar Dryer for optimal results.",
  description: "High quality Solar Dryer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2023,
  price: 1719,
  packSize: "Standard",
  rating: 4.5,
  reviews: 153,
  stock: "in",
  image: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Machinery",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "drip-irrigation-kit",
  sku: "SA-IRR-6034",
  name: "Drip Irrigation Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Drip Irrigation Kit for optimal results.",
  description: "High quality Drip Irrigation Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1851,
  price: 1573,
  packSize: "Standard",
  rating: 4.5,
  reviews: 362,
  stock: "in",
  image: "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "inline-drip-pipe",
  sku: "SA-IRR-3708",
  name: "Inline Drip Pipe",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Inline Drip Pipe for optimal results.",
  description: "High quality Inline Drip Pipe designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1672,
  price: 1421,
  packSize: "Standard",
  rating: 4.5,
  reviews: 108,
  stock: "in",
  image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "hdpe-pipe",
  sku: "SA-IRR-4255",
  name: "HDPE Pipe",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium HDPE Pipe for optimal results.",
  description: "High quality HDPE Pipe designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1854,
  price: 1575,
  packSize: "Standard",
  rating: 4.5,
  reviews: 135,
  stock: "in",
  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "pvc-pipe",
  sku: "SA-IRR-3417",
  name: "PVC Pipe",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium PVC Pipe for optimal results.",
  description: "High quality PVC Pipe designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2376,
  price: 2019,
  packSize: "Standard",
  rating: 4.5,
  reviews: 230,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "water-pump",
  sku: "SA-IRR-6040",
  name: "Water Pump",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Water Pump for optimal results.",
  description: "High quality Water Pump designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 662,
  price: 562,
  packSize: "Standard",
  rating: 4.5,
  reviews: 485,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "submersible-pump",
  sku: "SA-IRR-2766",
  name: "Submersible Pump",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Submersible Pump for optimal results.",
  description: "High quality Submersible Pump designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1920,
  price: 1632,
  packSize: "Standard",
  rating: 4.5,
  reviews: 12,
  stock: "in",
  image: "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "sprinkler-set",
  sku: "SA-IRR-1474",
  name: "Sprinkler Set",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Sprinkler Set for optimal results.",
  description: "High quality Sprinkler Set designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 849,
  price: 721,
  packSize: "Standard",
  rating: 4.5,
  reviews: 505,
  stock: "in",
  image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "rain-gun",
  sku: "SA-IRR-3976",
  name: "Rain Gun",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Rain Gun for optimal results.",
  description: "High quality Rain Gun designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1174,
  price: 997,
  packSize: "Standard",
  rating: 4.5,
  reviews: 268,
  stock: "in",
  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "fogger-system",
  sku: "SA-IRR-1226",
  name: "Fogger System",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Fogger System for optimal results.",
  description: "High quality Fogger System designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2277,
  price: 1935,
  packSize: "Standard",
  rating: 4.5,
  reviews: 271,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "micro-sprinkler",
  sku: "SA-IRR-6067",
  name: "Micro Sprinkler",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Micro Sprinkler for optimal results.",
  description: "High quality Micro Sprinkler designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 599,
  price: 509,
  packSize: "Standard",
  rating: 4.5,
  reviews: 117,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "drip-connector-kit",
  sku: "SA-IRR-5567",
  name: "Drip Connector Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Drip Connector Kit for optimal results.",
  description: "High quality Drip Connector Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2392,
  price: 2033,
  packSize: "Standard",
  rating: 4.5,
  reviews: 490,
  stock: "in",
  image: "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "ball-valve",
  sku: "SA-IRR-232",
  name: "Ball Valve",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Ball Valve for optimal results.",
  description: "High quality Ball Valve designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 735,
  price: 624,
  packSize: "Standard",
  rating: 4.5,
  reviews: 287,
  stock: "in",
  image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "screen-filter",
  sku: "SA-IRR-5703",
  name: "Screen Filter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Screen Filter for optimal results.",
  description: "High quality Screen Filter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2140,
  price: 1819,
  packSize: "Standard",
  rating: 4.5,
  reviews: 319,
  stock: "in",
  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "disc-filter",
  sku: "SA-IRR-8392",
  name: "Disc Filter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Disc Filter for optimal results.",
  description: "High quality Disc Filter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1026,
  price: 872,
  packSize: "Standard",
  rating: 4.5,
  reviews: 66,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "venturi-injector",
  sku: "SA-IRR-3970",
  name: "Venturi Injector",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Venturi Injector for optimal results.",
  description: "High quality Venturi Injector designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2140,
  price: 1819,
  packSize: "Standard",
  rating: 4.5,
  reviews: 478,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "hose-pipe",
  sku: "SA-IRR-8026",
  name: "Hose Pipe",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Hose Pipe for optimal results.",
  description: "High quality Hose Pipe designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 850,
  price: 722,
  packSize: "Standard",
  rating: 4.5,
  reviews: 269,
  stock: "in",
  image: "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "water-timer",
  sku: "SA-IRR-8803",
  name: "Water Timer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Water Timer for optimal results.",
  description: "High quality Water Timer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1610,
  price: 1368,
  packSize: "Standard",
  rating: 4.5,
  reviews: 483,
  stock: "in",
  image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "irrigation-controller",
  sku: "SA-IRR-9162",
  name: "Irrigation Controller",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Irrigation Controller for optimal results.",
  description: "High quality Irrigation Controller designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 910,
  price: 773,
  packSize: "Standard",
  rating: 4.5,
  reviews: 342,
  stock: "in",
  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "pipe-clamp",
  sku: "SA-IRR-6339",
  name: "Pipe Clamp",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium Pipe Clamp for optimal results.",
  description: "High quality Pipe Clamp designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1571,
  price: 1335,
  packSize: "Standard",
  rating: 4.5,
  reviews: 216,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "end-cap",
  sku: "SA-IRR-2385",
  name: "End Cap",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["tomato", "wheat"],
  short: "Premium End Cap for optimal results.",
  description: "High quality End Cap designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1875,
  price: 1593,
  packSize: "Standard",
  rating: 4.5,
  reviews: 285,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Irrigation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "shade-net",
  sku: "SA-PRO-4556",
  name: "Shade Net",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Shade Net for optimal results.",
  description: "High quality Shade Net designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2044,
  price: 1737,
  packSize: "Standard",
  rating: 4.5,
  reviews: 358,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "mulch-film",
  sku: "SA-PRO-6880",
  name: "Mulch Film",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Mulch Film for optimal results.",
  description: "High quality Mulch Film designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2282,
  price: 1939,
  packSize: "Standard",
  rating: 4.5,
  reviews: 219,
  stock: "in",
  image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "grow-bag",
  sku: "SA-PRO-5333",
  name: "Grow Bag",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Grow Bag for optimal results.",
  description: "High quality Grow Bag designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 974,
  price: 827,
  packSize: "Standard",
  rating: 4.5,
  reviews: 280,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "nursery-tray",
  sku: "SA-PRO-6030",
  name: "Nursery Tray",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Nursery Tray for optimal results.",
  description: "High quality Nursery Tray designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 504,
  price: 428,
  packSize: "Standard",
  rating: 4.5,
  reviews: 11,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "cocopeat-block",
  sku: "SA-PRO-182",
  name: "Cocopeat Block",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Cocopeat Block for optimal results.",
  description: "High quality Cocopeat Block designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1073,
  price: 912,
  packSize: "Standard",
  rating: 4.5,
  reviews: 400,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "vermiculite",
  sku: "SA-PRO-7543",
  name: "Vermiculite",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Vermiculite for optimal results.",
  description: "High quality Vermiculite designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1362,
  price: 1157,
  packSize: "Standard",
  rating: 4.5,
  reviews: 96,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "perlite",
  sku: "SA-PRO-3893",
  name: "Perlite",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Perlite for optimal results.",
  description: "High quality Perlite designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 735,
  price: 624,
  packSize: "Standard",
  rating: 4.5,
  reviews: 418,
  stock: "in",
  image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "greenhouse-film",
  sku: "SA-PRO-263",
  name: "Greenhouse Film",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Greenhouse Film for optimal results.",
  description: "High quality Greenhouse Film designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1476,
  price: 1254,
  packSize: "Standard",
  rating: 4.5,
  reviews: 244,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "crop-cover",
  sku: "SA-PRO-7685",
  name: "Crop Cover",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Crop Cover for optimal results.",
  description: "High quality Crop Cover designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 669,
  price: 568,
  packSize: "Standard",
  rating: 4.5,
  reviews: 122,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plant-support-clips",
  sku: "SA-PRO-2685",
  name: "Plant Support Clips",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Plant Support Clips for optimal results.",
  description: "High quality Plant Support Clips designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 940,
  price: 799,
  packSize: "Standard",
  rating: 4.5,
  reviews: 324,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "trellis-net",
  sku: "SA-PRO-7601",
  name: "Trellis Net",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Trellis Net for optimal results.",
  description: "High quality Trellis Net designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1330,
  price: 1130,
  packSize: "Standard",
  rating: 4.5,
  reviews: 317,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "polyhouse-sheet",
  sku: "SA-PRO-5200",
  name: "Polyhouse Sheet",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Polyhouse Sheet for optimal results.",
  description: "High quality Polyhouse Sheet designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1399,
  price: 1189,
  packSize: "Standard",
  rating: 4.5,
  reviews: 185,
  stock: "in",
  image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "seedling-tray",
  sku: "SA-PRO-3720",
  name: "Seedling Tray",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Seedling Tray for optimal results.",
  description: "High quality Seedling Tray designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 837,
  price: 711,
  packSize: "Standard",
  rating: 4.5,
  reviews: 326,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plant-labels",
  sku: "SA-PRO-2286",
  name: "Plant Labels",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Plant Labels for optimal results.",
  description: "High quality Plant Labels designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1175,
  price: 998,
  packSize: "Standard",
  rating: 4.5,
  reviews: 88,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "drip-stake",
  sku: "SA-PRO-2385",
  name: "Drip Stake",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Drip Stake for optimal results.",
  description: "High quality Drip Stake designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 890,
  price: 756,
  packSize: "Standard",
  rating: 4.5,
  reviews: 407,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "garden-fabric",
  sku: "SA-PRO-7738",
  name: "Garden Fabric",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Garden Fabric for optimal results.",
  description: "High quality Garden Fabric designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2020,
  price: 1717,
  packSize: "Standard",
  rating: 4.5,
  reviews: 242,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plant-tie-roll",
  sku: "SA-PRO-8226",
  name: "Plant Tie Roll",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Plant Tie Roll for optimal results.",
  description: "High quality Plant Tie Roll designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 566,
  price: 481,
  packSize: "Standard",
  rating: 4.5,
  reviews: 329,
  stock: "in",
  image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "nursery-pot",
  sku: "SA-PRO-2029",
  name: "Nursery Pot",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Nursery Pot for optimal results.",
  description: "High quality Nursery Pot designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2132,
  price: 1812,
  packSize: "Standard",
  rating: 4.5,
  reviews: 87,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "uv-shade-cloth",
  sku: "SA-PRO-9871",
  name: "UV Shade Cloth",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium UV Shade Cloth for optimal results.",
  description: "High quality UV Shade Cloth designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 595,
  price: 505,
  packSize: "Standard",
  rating: 4.5,
  reviews: 193,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plant-support-pole",
  sku: "SA-PRO-533",
  name: "Plant Support Pole",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "wheat"],
  short: "Premium Plant Support Pole for optimal results.",
  description: "High quality Plant Support Pole designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1560,
  price: 1326,
  packSize: "Standard",
  rating: 4.5,
  reviews: 38,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Protected Cultivation",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "indoor-plant-pot",
  sku: "SA-URB-9753",
  name: "Indoor Plant Pot",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Indoor Plant Pot for optimal results.",
  description: "High quality Indoor Plant Pot designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1843,
  price: 1566,
  packSize: "Standard",
  rating: 4.5,
  reviews: 316,
  stock: "in",
  image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "ceramic-planter",
  sku: "SA-URB-5583",
  name: "Ceramic Planter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Ceramic Planter for optimal results.",
  description: "High quality Ceramic Planter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 746,
  price: 634,
  packSize: "Standard",
  rating: 4.5,
  reviews: 278,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plastic-pot",
  sku: "SA-URB-3341",
  name: "Plastic Pot",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Plastic Pot for optimal results.",
  description: "High quality Plastic Pot designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1055,
  price: 896,
  packSize: "Standard",
  rating: 4.5,
  reviews: 104,
  stock: "in",
  image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "hanging-planter",
  sku: "SA-URB-2790",
  name: "Hanging Planter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Hanging Planter for optimal results.",
  description: "High quality Hanging Planter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1624,
  price: 1380,
  packSize: "Standard",
  rating: 4.5,
  reviews: 502,
  stock: "in",
  image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "watering-can",
  sku: "SA-URB-4536",
  name: "Watering Can",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Watering Can for optimal results.",
  description: "High quality Watering Can designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 729,
  price: 619,
  packSize: "Standard",
  rating: 4.5,
  reviews: 157,
  stock: "in",
  image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "hand-trowel",
  sku: "SA-URB-6569",
  name: "Hand Trowel",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Hand Trowel for optimal results.",
  description: "High quality Hand Trowel designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 764,
  price: 649,
  packSize: "Standard",
  rating: 4.5,
  reviews: 397,
  stock: "in",
  image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "garden-fork",
  sku: "SA-URB-4460",
  name: "Garden Fork",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Garden Fork for optimal results.",
  description: "High quality Garden Fork designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1561,
  price: 1326,
  packSize: "Standard",
  rating: 4.5,
  reviews: 296,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "garden-gloves",
  sku: "SA-URB-6307",
  name: "Garden Gloves",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Garden Gloves for optimal results.",
  description: "High quality Garden Gloves designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 832,
  price: 707,
  packSize: "Standard",
  rating: 4.5,
  reviews: 446,
  stock: "in",
  image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "potting-mix",
  sku: "SA-URB-3987",
  name: "Potting Mix",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Potting Mix for optimal results.",
  description: "High quality Potting Mix designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 693,
  price: 589,
  packSize: "Standard",
  rating: 4.5,
  reviews: 403,
  stock: "in",
  image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "compost-mix",
  sku: "SA-URB-2516",
  name: "Compost Mix",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Compost Mix for optimal results.",
  description: "High quality Compost Mix designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1467,
  price: 1246,
  packSize: "Standard",
  rating: 4.5,
  reviews: 381,
  stock: "in",
  image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plant-stand",
  sku: "SA-URB-7384",
  name: "Plant Stand",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Plant Stand for optimal results.",
  description: "High quality Plant Stand designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1231,
  price: 1046,
  packSize: "Standard",
  rating: 4.5,
  reviews: 254,
  stock: "in",
  image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "garden-pruner",
  sku: "SA-URB-4236",
  name: "Garden Pruner",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Garden Pruner for optimal results.",
  description: "High quality Garden Pruner designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2125,
  price: 1806,
  packSize: "Standard",
  rating: 4.5,
  reviews: 405,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "spray-bottle",
  sku: "SA-URB-5513",
  name: "Spray Bottle",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Spray Bottle for optimal results.",
  description: "High quality Spray Bottle designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 501,
  price: 425,
  packSize: "Standard",
  rating: 4.5,
  reviews: 12,
  stock: "in",
  image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "seed-starter-kit",
  sku: "SA-URB-7756",
  name: "Seed Starter Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Seed Starter Kit for optimal results.",
  description: "High quality Seed Starter Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1676,
  price: 1424,
  packSize: "Standard",
  rating: 4.5,
  reviews: 242,
  stock: "in",
  image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plant-food",
  sku: "SA-URB-8102",
  name: "Plant Food",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Plant Food for optimal results.",
  description: "High quality Plant Food designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1578,
  price: 1341,
  packSize: "Standard",
  rating: 4.5,
  reviews: 278,
  stock: "in",
  image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "garden-tool-set",
  sku: "SA-URB-4220",
  name: "Garden Tool Set",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "urban-gardening",
  crop: ["tomato", "wheat"],
  short: "Premium Garden Tool Set for optimal results.",
  description: "High quality Garden Tool Set designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1976,
  price: 1679,
  packSize: "Standard",
  rating: 4.5,
  reviews: 279,
  stock: "in",
  image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Urban Gardening",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "teak-sapling",
  sku: "SA-SAP-9036",
  name: "Teak Sapling",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "saplings-plants",
  crop: ["tomato", "wheat"],
  short: "Premium Teak Sapling for optimal results.",
  description: "High quality Teak Sapling designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2042,
  price: 1735,
  packSize: "Standard",
  rating: 4.5,
  reviews: 170,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Saplings & Plants",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "sandalwood-sapling",
  sku: "SA-SAP-7930",
  name: "Sandalwood Sapling",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "saplings-plants",
  crop: ["tomato", "wheat"],
  short: "Premium Sandalwood Sapling for optimal results.",
  description: "High quality Sandalwood Sapling designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1788,
  price: 1519,
  packSize: "Standard",
  rating: 4.5,
  reviews: 382,
  stock: "in",
  image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Saplings & Plants",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "bamboo-plant",
  sku: "SA-SAP-3218",
  name: "Bamboo Plant",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "saplings-plants",
  crop: ["tomato", "wheat"],
  short: "Premium Bamboo Plant for optimal results.",
  description: "High quality Bamboo Plant designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2169,
  price: 1843,
  packSize: "Standard",
  rating: 4.5,
  reviews: 142,
  stock: "in",
  image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Saplings & Plants",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "neem-sapling",
  sku: "SA-SAP-9382",
  name: "Neem Sapling",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "saplings-plants",
  crop: ["tomato", "wheat"],
  short: "Premium Neem Sapling for optimal results.",
  description: "High quality Neem Sapling designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 828,
  price: 703,
  packSize: "Standard",
  rating: 4.5,
  reviews: 68,
  stock: "in",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Saplings & Plants",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "rose-plant",
  sku: "SA-SAP-2464",
  name: "Rose Plant",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "saplings-plants",
  crop: ["tomato", "wheat"],
  short: "Premium Rose Plant for optimal results.",
  description: "High quality Rose Plant designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1980,
  price: 1683,
  packSize: "Standard",
  rating: 4.5,
  reviews: 41,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Saplings & Plants",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "hibiscus-plant",
  sku: "SA-SAP-8597",
  name: "Hibiscus Plant",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "saplings-plants",
  crop: ["tomato", "wheat"],
  short: "Premium Hibiscus Plant for optimal results.",
  description: "High quality Hibiscus Plant designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 927,
  price: 787,
  packSize: "Standard",
  rating: 4.5,
  reviews: 183,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Saplings & Plants",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "safety-gloves",
  sku: "SA-FAR-7749",
  name: "Safety Gloves",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Safety Gloves for optimal results.",
  description: "High quality Safety Gloves designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 697,
  price: 592,
  packSize: "Standard",
  rating: 4.5,
  reviews: 501,
  stock: "in",
  image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "safety-shoes",
  sku: "SA-FAR-3429",
  name: "Safety Shoes",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Safety Shoes for optimal results.",
  description: "High quality Safety Shoes designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2464,
  price: 2094,
  packSize: "Standard",
  rating: 4.5,
  reviews: 312,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "face-mask",
  sku: "SA-FAR-2151",
  name: "Face Mask",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Face Mask for optimal results.",
  description: "High quality Face Mask designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1332,
  price: 1132,
  packSize: "Standard",
  rating: 4.5,
  reviews: 480,
  stock: "in",
  image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "safety-goggles",
  sku: "SA-FAR-8615",
  name: "Safety Goggles",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Safety Goggles for optimal results.",
  description: "High quality Safety Goggles designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2229,
  price: 1894,
  packSize: "Standard",
  rating: 4.5,
  reviews: 33,
  stock: "in",
  image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "raincoat",
  sku: "SA-FAR-6575",
  name: "Raincoat",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Raincoat for optimal results.",
  description: "High quality Raincoat designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1763,
  price: 1498,
  packSize: "Standard",
  rating: 4.5,
  reviews: 254,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "tarpaulin-sheet",
  sku: "SA-FAR-2869",
  name: "Tarpaulin Sheet",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Tarpaulin Sheet for optimal results.",
  description: "High quality Tarpaulin Sheet designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 752,
  price: 639,
  packSize: "Standard",
  rating: 4.5,
  reviews: 110,
  stock: "in",
  image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "harvest-crate",
  sku: "SA-FAR-7026",
  name: "Harvest Crate",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Harvest Crate for optimal results.",
  description: "High quality Harvest Crate designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2003,
  price: 1702,
  packSize: "Standard",
  rating: 4.5,
  reviews: 399,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "plastic-basket",
  sku: "SA-FAR-6875",
  name: "Plastic Basket",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Plastic Basket for optimal results.",
  description: "High quality Plastic Basket designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 646,
  price: 549,
  packSize: "Standard",
  rating: 4.5,
  reviews: 189,
  stock: "in",
  image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "measuring-cup",
  sku: "SA-FAR-1821",
  name: "Measuring Cup",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Measuring Cup for optimal results.",
  description: "High quality Measuring Cup designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1295,
  price: 1100,
  packSize: "Standard",
  rating: 4.5,
  reviews: 41,
  stock: "in",
  image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "ph-meter",
  sku: "SA-FAR-9937",
  name: "pH Meter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium pH Meter for optimal results.",
  description: "High quality pH Meter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2128,
  price: 1808,
  packSize: "Standard",
  rating: 4.5,
  reviews: 184,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "ec-meter",
  sku: "SA-FAR-5391",
  name: "EC Meter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium EC Meter for optimal results.",
  description: "High quality EC Meter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1051,
  price: 893,
  packSize: "Standard",
  rating: 4.5,
  reviews: 488,
  stock: "in",
  image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "moisture-meter",
  sku: "SA-FAR-1827",
  name: "Moisture Meter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Moisture Meter for optimal results.",
  description: "High quality Moisture Meter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 613,
  price: 521,
  packSize: "Standard",
  rating: 4.5,
  reviews: 427,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "rope-roll",
  sku: "SA-FAR-3505",
  name: "Rope Roll",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Rope Roll for optimal results.",
  description: "High quality Rope Roll designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 704,
  price: 598,
  packSize: "Standard",
  rating: 4.5,
  reviews: 245,
  stock: "in",
  image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "garden-hose",
  sku: "SA-FAR-2620",
  name: "Garden Hose",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Garden Hose for optimal results.",
  description: "High quality Garden Hose designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 845,
  price: 718,
  packSize: "Standard",
  rating: 4.5,
  reviews: 182,
  stock: "in",
  image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "tool-box",
  sku: "SA-FAR-5367",
  name: "Tool Box",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Tool Box for optimal results.",
  description: "High quality Tool Box designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1374,
  price: 1167,
  packSize: "Standard",
  rating: 4.5,
  reviews: 52,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "spray-nozzle",
  sku: "SA-FAR-3302",
  name: "Spray Nozzle",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Spray Nozzle for optimal results.",
  description: "High quality Spray Nozzle designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2382,
  price: 2024,
  packSize: "Standard",
  rating: 4.5,
  reviews: 455,
  stock: "in",
  image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "hose-clamp",
  sku: "SA-FAR-6040",
  name: "Hose Clamp",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Hose Clamp for optimal results.",
  description: "High quality Hose Clamp designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1975,
  price: 1678,
  packSize: "Standard",
  rating: 4.5,
  reviews: 361,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "garden-scissors",
  sku: "SA-FAR-9172",
  name: "Garden Scissors",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Garden Scissors for optimal results.",
  description: "High quality Garden Scissors designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1490,
  price: 1266,
  packSize: "Standard",
  rating: 4.5,
  reviews: 449,
  stock: "in",
  image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "tool-belt",
  sku: "SA-FAR-1601",
  name: "Tool Belt",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium Tool Belt for optimal results.",
  description: "High quality Tool Belt designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 827,
  price: 702,
  packSize: "Standard",
  rating: 4.5,
  reviews: 229,
  stock: "in",
  image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "led-work-light",
  sku: "SA-FAR-5260",
  name: "LED Work Light",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: ["tomato", "wheat"],
  short: "Premium LED Work Light for optimal results.",
  description: "High quality LED Work Light designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 995,
  price: 845,
  packSize: "Standard",
  rating: 4.5,
  reviews: 116,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Farm Accessories",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "soil-ph-test-kit",
  sku: "SA-SOI-1194",
  name: "Soil pH Test Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Soil pH Test Kit for optimal results.",
  description: "High quality Soil pH Test Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 992,
  price: 843,
  packSize: "Standard",
  rating: 4.5,
  reviews: 475,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "soil-ec-meter",
  sku: "SA-SOI-4038",
  name: "Soil EC Meter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Soil EC Meter for optimal results.",
  description: "High quality Soil EC Meter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1880,
  price: 1598,
  packSize: "Standard",
  rating: 4.5,
  reviews: 31,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "soil-moisture-meter",
  sku: "SA-SOI-355",
  name: "Soil Moisture Meter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Soil Moisture Meter for optimal results.",
  description: "High quality Soil Moisture Meter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1705,
  price: 1449,
  packSize: "Standard",
  rating: 4.5,
  reviews: 104,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "soil-npk-test-kit",
  sku: "SA-SOI-1371",
  name: "Soil NPK Test Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Soil NPK Test Kit for optimal results.",
  description: "High quality Soil NPK Test Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2341,
  price: 1989,
  packSize: "Standard",
  rating: 4.5,
  reviews: 186,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "water-ph-meter",
  sku: "SA-SOI-3736",
  name: "Water pH Meter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Water pH Meter for optimal results.",
  description: "High quality Water pH Meter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2404,
  price: 2043,
  packSize: "Standard",
  rating: 4.5,
  reviews: 340,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "water-tds-meter",
  sku: "SA-SOI-1301",
  name: "Water TDS Meter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Water TDS Meter for optimal results.",
  description: "High quality Water TDS Meter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1421,
  price: 1207,
  packSize: "Standard",
  rating: 4.5,
  reviews: 78,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "ec-meter",
  sku: "SA-SOI-4625",
  name: "EC Meter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium EC Meter for optimal results.",
  description: "High quality EC Meter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1859,
  price: 1580,
  packSize: "Standard",
  rating: 4.5,
  reviews: 391,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "digital-thermometer",
  sku: "SA-SOI-487",
  name: "Digital Thermometer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Digital Thermometer for optimal results.",
  description: "High quality Digital Thermometer designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1017,
  price: 864,
  packSize: "Standard",
  rating: 4.5,
  reviews: 481,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "soil-sampling-kit",
  sku: "SA-SOI-9232",
  name: "Soil Sampling Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Soil Sampling Kit for optimal results.",
  description: "High quality Soil Sampling Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1934,
  price: 1643,
  packSize: "Standard",
  rating: 4.5,
  reviews: 354,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "water-hardness-test-kit",
  sku: "SA-SOI-7365",
  name: "Water Hardness Test Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Water Hardness Test Kit for optimal results.",
  description: "High quality Water Hardness Test Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1010,
  price: 858,
  packSize: "Standard",
  rating: 4.5,
  reviews: 198,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "soil-analysis-kit",
  sku: "SA-SOI-2573",
  name: "Soil Analysis Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Soil Analysis Kit for optimal results.",
  description: "High quality Soil Analysis Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1341,
  price: 1139,
  packSize: "Standard",
  rating: 4.5,
  reviews: 346,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "water-testing-strips",
  sku: "SA-SOI-5720",
  name: "Water Testing Strips",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Water Testing Strips for optimal results.",
  description: "High quality Water Testing Strips designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 664,
  price: 564,
  packSize: "Standard",
  rating: 4.5,
  reviews: 299,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "conductivity-meter",
  sku: "SA-SOI-6469",
  name: "Conductivity Meter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Conductivity Meter for optimal results.",
  description: "High quality Conductivity Meter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1035,
  price: 879,
  packSize: "Standard",
  rating: 4.5,
  reviews: 443,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "salinity-meter",
  sku: "SA-SOI-8967",
  name: "Salinity Meter",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Salinity Meter for optimal results.",
  description: "High quality Salinity Meter designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1615,
  price: 1372,
  packSize: "Standard",
  rating: 4.5,
  reviews: 394,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "nitrate-test-kit",
  sku: "SA-SOI-8944",
  name: "Nitrate Test Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Nitrate Test Kit for optimal results.",
  description: "High quality Nitrate Test Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1156,
  price: 982,
  packSize: "Standard",
  rating: 4.5,
  reviews: 430,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "potassium-test-kit",
  sku: "SA-SOI-7544",
  name: "Potassium Test Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Potassium Test Kit for optimal results.",
  description: "High quality Potassium Test Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2067,
  price: 1756,
  packSize: "Standard",
  rating: 4.5,
  reviews: 265,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "phosphorus-test-kit",
  sku: "SA-SOI-2035",
  name: "Phosphorus Test Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Phosphorus Test Kit for optimal results.",
  description: "High quality Phosphorus Test Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 627,
  price: 532,
  packSize: "Standard",
  rating: 4.5,
  reviews: 495,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "calcium-test-kit",
  sku: "SA-SOI-5788",
  name: "Calcium Test Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Calcium Test Kit for optimal results.",
  description: "High quality Calcium Test Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1973,
  price: 1677,
  packSize: "Standard",
  rating: 4.5,
  reviews: 237,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "soil-health-kit",
  sku: "SA-SOI-3164",
  name: "Soil Health Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Soil Health Kit for optimal results.",
  description: "High quality Soil Health Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2175,
  price: 1848,
  packSize: "Standard",
  rating: 4.5,
  reviews: 169,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "irrigation-water-test-kit",
  sku: "SA-SOI-8635",
  name: "Irrigation Water Test Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: ["tomato", "wheat"],
  short: "Premium Irrigation Water Test Kit for optimal results.",
  description: "High quality Irrigation Water Test Kit designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1888,
  price: 1604,
  packSize: "Standard",
  rating: 4.5,
  reviews: 363,
  stock: "in",
  image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Soil & Water Testing",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "soil-testing-service",
  sku: "SA-SER-5792",
  name: "Soil Testing Service",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Soil Testing Service for optimal results.",
  description: "High quality Soil Testing Service designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1320,
  price: 1122,
  packSize: "Standard",
  rating: 4.5,
  reviews: 106,
  stock: "in",
  image: "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "water-testing-service",
  sku: "SA-SER-4598",
  name: "Water Testing Service",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Water Testing Service for optimal results.",
  description: "High quality Water Testing Service designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1371,
  price: 1165,
  packSize: "Standard",
  rating: 4.5,
  reviews: 264,
  stock: "in",
  image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "crop-advisory",
  sku: "SA-SER-940",
  name: "Crop Advisory",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Crop Advisory for optimal results.",
  description: "High quality Crop Advisory designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1771,
  price: 1505,
  packSize: "Standard",
  rating: 4.5,
  reviews: 505,
  stock: "in",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "pest-diagnosis",
  sku: "SA-SER-8939",
  name: "Pest Diagnosis",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Pest Diagnosis for optimal results.",
  description: "High quality Pest Diagnosis designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1363,
  price: 1158,
  packSize: "Standard",
  rating: 4.5,
  reviews: 362,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "disease-diagnosis",
  sku: "SA-SER-2804",
  name: "Disease Diagnosis",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Disease Diagnosis for optimal results.",
  description: "High quality Disease Diagnosis designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 927,
  price: 787,
  packSize: "Standard",
  rating: 4.5,
  reviews: 116,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "nutrient-recommendation",
  sku: "SA-SER-2643",
  name: "Nutrient Recommendation",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Nutrient Recommendation for optimal results.",
  description: "High quality Nutrient Recommendation designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1319,
  price: 1121,
  packSize: "Standard",
  rating: 4.5,
  reviews: 65,
  stock: "in",
  image: "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "farm-consultancy",
  sku: "SA-SER-9748",
  name: "Farm Consultancy",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Farm Consultancy for optimal results.",
  description: "High quality Farm Consultancy designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 516,
  price: 438,
  packSize: "Standard",
  rating: 4.5,
  reviews: 292,
  stock: "in",
  image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "organic-farming-guidance",
  sku: "SA-SER-4248",
  name: "Organic Farming Guidance",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Organic Farming Guidance for optimal results.",
  description: "High quality Organic Farming Guidance designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 536,
  price: 455,
  packSize: "Standard",
  rating: 4.5,
  reviews: 273,
  stock: "in",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "irrigation-planning",
  sku: "SA-SER-7753",
  name: "Irrigation Planning",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Irrigation Planning for optimal results.",
  description: "High quality Irrigation Planning designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 931,
  price: 791,
  packSize: "Standard",
  rating: 4.5,
  reviews: 316,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "greenhouse-consultancy",
  sku: "SA-SER-8834",
  name: "Greenhouse Consultancy",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Greenhouse Consultancy for optimal results.",
  description: "High quality Greenhouse Consultancy designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1225,
  price: 1041,
  packSize: "Standard",
  rating: 4.5,
  reviews: 486,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "dealer-registration",
  sku: "SA-SER-5609",
  name: "Dealer Registration",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Dealer Registration for optimal results.",
  description: "High quality Dealer Registration designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1125,
  price: 956,
  packSize: "Standard",
  rating: 4.5,
  reviews: 44,
  stock: "in",
  image: "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "distributor-registration",
  sku: "SA-SER-9424",
  name: "Distributor Registration",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Distributor Registration for optimal results.",
  description: "High quality Distributor Registration designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2368,
  price: 2012,
  packSize: "Standard",
  rating: 4.5,
  reviews: 177,
  stock: "in",
  image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "bulk-order-assistance",
  sku: "SA-SER-7623",
  name: "Bulk Order Assistance",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Bulk Order Assistance for optimal results.",
  description: "High quality Bulk Order Assistance designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 516,
  price: 438,
  packSize: "Standard",
  rating: 4.5,
  reviews: 412,
  stock: "in",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "farm-visit-consultation",
  sku: "SA-SER-6267",
  name: "Farm Visit Consultation",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Farm Visit Consultation for optimal results.",
  description: "High quality Farm Visit Consultation designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 711,
  price: 604,
  packSize: "Standard",
  rating: 4.5,
  reviews: 386,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "crop-planning-service",
  sku: "SA-SER-5504",
  name: "Crop Planning Service",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Crop Planning Service for optimal results.",
  description: "High quality Crop Planning Service designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2254,
  price: 1915,
  packSize: "Standard",
  rating: 4.5,
  reviews: 103,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "weather-advisory",
  sku: "SA-SER-404",
  name: "Weather Advisory",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Weather Advisory for optimal results.",
  description: "High quality Weather Advisory designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1146,
  price: 974,
  packSize: "Standard",
  rating: 4.5,
  reviews: 451,
  stock: "in",
  image: "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "government-scheme-guidance",
  sku: "SA-SER-335",
  name: "Government Scheme Guidance",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Government Scheme Guidance for optimal results.",
  description: "High quality Government Scheme Guidance designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1182,
  price: 1004,
  packSize: "Standard",
  rating: 4.5,
  reviews: 245,
  stock: "in",
  image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "subsidy-assistance",
  sku: "SA-SER-5850",
  name: "Subsidy Assistance",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Subsidy Assistance for optimal results.",
  description: "High quality Subsidy Assistance designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2249,
  price: 1911,
  packSize: "Standard",
  rating: 4.5,
  reviews: 57,
  stock: "in",
  image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "farmer-training-program",
  sku: "SA-SER-5101",
  name: "Farmer Training Program",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Farmer Training Program for optimal results.",
  description: "High quality Farmer Training Program designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 1618,
  price: 1375,
  packSize: "Standard",
  rating: 4.5,
  reviews: 497,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "technical-support-service",
  sku: "SA-SER-1244",
  name: "Technical Support Service",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "services",
  crop: ["tomato", "wheat"],
  short: "Premium Technical Support Service for optimal results.",
  description: "High quality Technical Support Service designed for professional farming and enterprise agriculture. Improves yield, efficiency, and overall crop health.",
  mrp: 2302,
  price: 1956,
  packSize: "Standard",
  rating: 4.5,
  reviews: 290,
  stock: "in",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["New", "Premium"],
  benefits: [
  "High effectiveness",
  "Enterprise grade quality",
  "Tested for best performance",
  "Cost efficient"
  ],
  usage: "Use as directed by standard agricultural practices or consult our advisory service.",
  specs: {
  "Type": "Agricultural Services",
  "Quality": "Premium",
  "Origin": "India"
  }
  },

  {
  slug: "shravani-field-green-npk-19",
  sku: "SA-NPK-19-25",
  name: "FieldGreen NPK 19:19:19",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "fertilizers",
  crop: ["tomato", "chilli", "cotton"],
  short: "Balanced water-soluble fertilizer for vigorous vegetative growth.",
  description:
  "A fully water-soluble compound of nitrogen, phosphorus and potassium designed for foliar and drip application. Delivers uniform nutrition through vegetative and early flowering stages, improving leaf area, root density and stress recovery.",
  mrp: 1450,
  price: 1199,
  packSize: "25 kg",
  rating: 4.7,
  reviews: 342,
  stock: "in",
  image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  ],
  badges: ["Bestseller", "Water Soluble"],
  benefits: [
  "Balanced 19:19:19 formulation for all growth stages",
  "100% water soluble — zero residue in drip lines",
  "Chloride-free, safe for sensitive crops",
  "Compatible with most agrochemicals",
  ],
  usage:
  "Foliar: 3–5 g/L. Drip / fertigation: 4–6 kg per acre per application, at 7–10 day intervals.",
  specs: {
  "Nitrogen (N)": "19%",
  "Phosphorus (P₂O₅)": "19%",
  "Potassium (K₂O)": "19%",
  Form: "Crystalline, water soluble",
  Pack: "25 kg HDPE bag",
  "Shelf life": "36 months",
  },
  },

  {
  slug: "aegis-broad-spectrum-insecticide-500ml",
  sku: "SA-AEGIS-500",
  name: "Aegis Broad-Spectrum Insecticide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["cotton", "chilli", "paddy"],
  short: "Systemic contact insecticide for sucking and chewing pests.",
  description:
  "Dual-action formulation combining a systemic neonicotinoid with a fast-acting contact ingredient. Effective against whitefly, aphids, jassids, thrips and bollworm complex on cotton, chilli, paddy and vegetables.",
  mrp: 940,
  price: 799,
  packSize: "500 ml",
  rating: 4.6,
  reviews: 218,
  stock: "in",
  image: "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  ],
  badges: ["New"],
  benefits: [
  "Controls sucking and chewing pests in a single spray",
  "Systemic uptake protects new growth",
  "Rainfast within 2 hours",
  "Long residual activity — up to 14 days",
  ],
  usage: "Spray 1.5–2 ml per litre of water. 300–400 litres of spray solution per acre.",
  specs: {
  "Active ingredient": "Imidacloprid 17.8% SL",
  Formulation: "Soluble Liquid (SL)",
  "Target pests": "Whitefly, aphid, jassid, thrips",
  PHI: "21 days",
  Pack: "500 ml HDPE bottle",
  },
  },

  {
  slug: "terraflow-drip-lateral-16mm-100m",
  sku: "SA-DRIP-16-100",
  name: "TerraFlow Inline Drip Lateral 16 mm",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["cotton", "sugarcane", "tomato"],
  short: "Pressure-compensating inline drip with 30 cm emitter spacing.",
  description:
  "Heavy-wall inline drip lateral with pressure-compensating emitters delivering uniform 2 L/hr discharge across long runs and uneven terrain. UV-stabilised for a 7-year field life.",
  mrp: 2400,
  price: 1999,
  packSize: "100 m roll",
  rating: 4.5,
  reviews: 96,
  stock: "low",
  image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  ],
  badges: ["Pressure Compensating"],
  benefits: [
  "Uniform discharge across long laterals",
  "Anti-clogging turbulent flow path",
  "UV-stabilised for 7-year field life",
  "Compatible with standard 16 mm fittings",
  ],
  usage:
  "Lay along crop row with emitter next to root zone. Recommended operating pressure 1.0 bar.",
  specs: {
  Diameter: "16 mm",
  "Wall thickness": "0.9 mm",
  "Emitter spacing": "30 cm",
  Discharge: "2 L/hr (PC)",
  Length: "100 m",
  },
  },

  {
  slug: "rootspring-organic-biostimulant-1l",
  sku: "SA-BIO-RS-1L",
  name: "RootSpring Organic Biostimulant",
  brand: "Shravani Agroproducts Enterprises LLP Organic",
  category: "plant-growth",
  crop: ["wheat", "paddy", "onion"],
  short: "Seaweed + humic biostimulant for root vigour and stress recovery.",
  description:
  "A cold-processed extract of Ascophyllum nodosum blended with humic and fulvic acids. Stimulates rooting, activates soil biology and improves recovery from drought and transplant shock.",
  mrp: 890,
  price: 749,
  packSize: "1 L",
  rating: 4.9,
  reviews: 187,
  stock: "in",
  image: "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
  "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=800&q=80",
  ],
  badges: ["Organic Certified"],
  benefits: [
  "Boosts root mass within 10–14 days",
  "Improves nutrient uptake and stress tolerance",
  "PGS-India organic certified",
  "Compatible with drip and foliar",
  ],
  usage: "Foliar: 2–3 ml/L. Drip: 1 L per acre every 15 days.",
  specs: {
  Composition: "Seaweed extract + humic 12%",
  Certification: "PGS-India Organic",
  Form: "Liquid concentrate",
  Pack: "1 L HDPE bottle",
  },
  },

  {
  slug: "torque-16l-battery-sprayer",
  sku: "SA-SPR-16B",
  name: "Torque 16 L Battery Knapsack Sprayer",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-machinery",
  crop: ["cotton", "chilli", "tomato", "soybean"],
  short: "Twin-mode battery + manual sprayer with brass nozzle set.",
  description:
  "12 V 8 Ah lithium battery drives a diaphragm pump delivering steady pressure for 6–8 hours per charge. Includes 4 brass nozzles, adjustable pressure regulator and reinforced tank straps.",
  mrp: 4200,
  price: 3499,
  packSize: "1 unit",
  rating: 4.4,
  reviews: 71,
  stock: "in",
  image: "https://images.unsplash.com/photo-1569025591987-ef6acfb3f774?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  "https://images.unsplash.com/photo-1544723795-3fb6a964db1c?w=800&q=80",
  "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a47d70?w=800&q=80",
  ],
  badges: ["Twin Mode"],
  benefits: [
  "6–8 hours run time per charge",
  "Twin-mode: battery or manual lever",
  "4-nozzle brass set for varied spray patterns",
  "12 month warranty on pump and battery",
  ],
  usage:
  "Charge fully before first use. Use appropriate nozzle for herbicide, insecticide or fungicide spray.",
  specs: {
  Tank: "16 L",
  Battery: "12 V, 8 Ah Li-ion",
  Pump: "Diaphragm, 4.5 kg pressure",
  "Weight (empty)": "5.2 kg",
  Warranty: "12 months",
  },
  },

  {
  slug: "canopy-shade-net-50-3x50m",
  sku: "SA-NET-50-150",
  name: "Canopy 50% Shade Net",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "protected-cultivation",
  crop: ["tomato", "chilli", "onion"],
  short: "UV-stabilised HDPE shade net for nursery and vegetable crops.",
  description:
  "Knitted HDPE shade net providing 50% shade factor, ideal for nursery raising, vegetable crops and floriculture. UV-stabilised for 5-year outdoor use with reinforced selvedge edges.",
  mrp: 3600,
  price: 2999,
  packSize: "3 m × 50 m",
  rating: 4.6,
  reviews: 58,
  stock: "in",
  image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&q=80",
  ],
  badges: ["UV Stabilised"],
  benefits: [
  "50% shade — ideal for tender crops",
  "Knitted construction resists tearing",
  "Reinforced selvedge edges",
  "5-year UV stabilisation",
  ],
  usage: "Fix over structure using GI wire. Ensure 30 cm overhang on all sides.",
  specs: {
  "Shade factor": "50%",
  Material: "HDPE monofilament",
  GSM: "90 g/m²",
  Size: "3 m × 50 m",
  },
  },

  {
  slug: "shieldcoat-fungicide-250g",
  sku: "SA-FUNG-SC-250",
  name: "ShieldCoat Systemic Fungicide",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "crop-protection",
  crop: ["wheat", "soybean", "groundnut"],
  short: "Broad-spectrum systemic fungicide for rust, blight and leaf spot.",
  description:
  "Triazole-strobilurin combination fungicide offering both preventive and curative action against rust, powdery mildew, leaf spot and blight complexes across cereals, pulses and oilseeds.",
  mrp: 1180,
  price: 999,
  packSize: "250 g",
  rating: 4.7,
  reviews: 132,
  stock: "in",
  image: "https://images.unsplash.com/photo-1558618047-f4e6b5a8c8a0?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  ],
  badges: ["Preventive + Curative"],
  benefits: [
  "Dual preventive and curative action",
  "Controls rust, blight and leaf spot",
  "Translaminar movement protects new leaves",
  "Improves grain fill and test weight",
  ],
  usage: "Spray 0.5–0.6 g per litre of water at disease onset. Repeat after 15 days if required.",
  specs: {
  "Active ingredient": "Tebuconazole 50% + Trifloxystrobin 25% WG",
  Formulation: "Water Dispersible Granule",
  PHI: "30 days",
  Pack: "250 g pouch",
  },
  },

  {
  slug: "greenroot-vermicompost-40kg",
  sku: "SA-ORG-VC-40",
  name: "GreenRoot Premium Vermicompost",
  brand: "Shravani Agroproducts Enterprises LLP Organic",
  category: "fertilizers",
  crop: ["onion", "tomato", "wheat"],
  short: "Nutrient-rich vermicompost for soil health and microbial activity.",
  description:
  "Fully composted, odour-free vermicompost enriched with earthworm castings. Improves soil structure, water-holding capacity and beneficial microbial population while supplying slow-release nutrition.",
  mrp: 650,
  price: 549,
  packSize: "40 kg",
  rating: 4.8,
  reviews: 201,
  stock: "in",
  image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80",
  "https://images.unsplash.com/photo-1595514191664-4ef0a93d5ef5?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?w=800&q=80",
  ],
  badges: ["Odour Free", "Organic"],
  benefits: [
  "Improves soil structure and aeration",
  "Boosts beneficial microbial population",
  "Slow-release nutrition reduces leaching",
  "Odour-free, safe to handle",
  ],
  usage: "Apply 1–1.5 tonnes per acre at land preparation, mixed into topsoil.",
  specs: {
  "N-P-K": "1.2 - 0.6 - 0.8 (approx.)",
  "Organic carbon": ">12%",
  Moisture: "<25%",
  Pack: "40 kg woven bag",
  },
  },

  {
  slug: "aquarain-rain-gun-sprinkler",
  sku: "SA-IRR-RG-1",
  name: "AquaRain Rotary Rain Gun Sprinkler",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "irrigation",
  crop: ["sugarcane", "groundnut", "wheat"],
  short: "Long-throw rotary rain gun for field and pasture irrigation.",
  description:
  "Brass-nozzle rotary rain gun delivering a uniform circular spray pattern with a throw radius up to 22 m. Robust gear-drive mechanism suited for continuous field operation.",
  mrp: 3200,
  price: 2799,
  packSize: "1 unit",
  rating: 4.4,
  reviews: 44,
  stock: "low",
  image: "https://images.unsplash.com/photo-1601472439804-cca4c78c6c05?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  ],
  badges: ["22 m Throw"],
  benefits: [
  "Uniform circular coverage up to 22 m radius",
  "Durable gear-drive rotation",
  "Brass nozzle resists wear and corrosion",
  "Suited for field and pasture use",
  ],
  usage: "Operate at 3–4 bar inlet pressure. Space guns at 30–35 m intervals for overlap.",
  specs: {
  "Throw radius": "Up to 22 m",
  "Operating pressure": "3–4 bar",
  Nozzle: "Brass, interchangeable",
  Inlet: "2 inch BSP",
  },
  },

  {
  slug: "farmshield-tarpaulin-heavy-duty",
  sku: "SA-ACC-TARP-1",
  name: "FarmShield Heavy-Duty Tarpaulin",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "farm-accessories",
  crop: [],
  short: "Woven HDPE tarpaulin for grain drying, storage and crop covering.",
  description:
  "Double-laminated, UV-treated HDPE tarpaulin ideal for sun-drying grain, covering harvested produce and protecting stored inputs from rain. Reinforced eyelets every 60 cm for secure tie-down.",
  mrp: 2100,
  price: 1799,
  packSize: "6 m × 9 m",
  rating: 4.5,
  reviews: 88,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80",
  ],
  badges: ["Heavy Duty"],
  benefits: [
  "Double-laminated for maximum durability",
  "Reinforced eyelets every 60 cm",
  "Waterproof — protects grain and inputs",
  "UV-treated for long outdoor life",
  ],
  usage: "Spread over grain or stacked produce; secure with rope through eyelets.",
  specs: {
  Material: "Woven HDPE, double laminated",
  GSM: "150 g/m²",
  Size: "6 m × 9 m",
  "Eyelet spacing": "60 cm",
  },
  },

  {
  slug: "soiltest-pro-diy-kit",
  sku: "SA-SOIL-PRO-1",
  name: "SoilTest Pro DIY Testing Kit",
  brand: "Shravani Agroproducts Enterprises LLP",
  category: "soil-water-testing",
  crop: [],
  short: "Field-ready kit for N-P-K, pH and EC estimation.",
  description:
  "A compact, reusable field kit for estimating nitrogen, phosphorus, potassium, pH and electrical conductivity of soil samples in minutes, helping plan fertilizer dose before sowing.",
  mrp: 2450,
  price: 2199,
  packSize: "1 kit (100 tests)",
  rating: 4.3,
  reviews: 39,
  stock: "in",
  image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
  images: [
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  "https://images.unsplash.com/photo-1527004013197-933b73b3e5a7?w=800&q=80",
  "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
  ],
  badges: ["100 Tests"],
  benefits: [
  "Estimates N, P, K, pH and EC in the field",
  "Reusable reagents — up to 100 tests",
  "Colour-chart based, no lab needed",
  "Helps plan precise fertilizer dosage",
  ],
  usage: "Mix soil sample with reagent as per included chart; compare colour to reference card.",
  specs: {
  "Tests per kit": "100",
  Parameters: "N, P, K, pH, EC",
  "Sample type": "Soil (field or lab)",
  "Shelf life": "18 months",
  },
  }
];

export function findProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
