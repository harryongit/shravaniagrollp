export type Subcategory = {
  slug: string;
  name: string;
  items: string[];
};

export type TaxonomyCategory = {
  slug: string;
  name: string;
  tagline: string;
  count: number;
  image: string;
  subcategories: Subcategory[];
};

export const taxonomy: TaxonomyCategory[] = [
  {
    "slug": "seeds",
    "name": "Seeds",
    "tagline": "Field, vegetable, fruit and organic-certified varieties",
    "count": 65,
    "image": "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80",
    "subcategories": [
      {
        "slug": "field-crop-seeds",
        "name": "Field Crop Seeds",
        "items": [
          "Cotton Seeds"
        ]
      }
    ]
  },
  {
    "slug": "crop-protection",
    "name": "Crop Protection",
    "tagline": "Insecticides, fungicides, herbicides, biologicals",
    "count": 520,
    "image": "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
    "subcategories": [
      {
        "slug": "insecticides",
        "name": "Insecticides",
        "items": [
          "Systemic Insecticide",
          "Contact Insecticide",
          "Broad Spectrum Fungicide",
          "Copper Fungicide",
          "Selective Herbicide",
          "Non-Selective Herbicide",
          "Snail & Slug Control"
        ]
      },
      {
        "slug": "fungicides",
        "name": "Fungicides",
        "items": []
      },
      {
        "slug": "herbicides",
        "name": "Herbicides",
        "items": []
      },
      {
        "slug": "bactericides",
        "name": "Bactericides",
        "items": [
          "Bactericide Spray"
        ]
      },
      {
        "slug": "nematicides",
        "name": "Nematicides",
        "items": []
      },
      {
        "slug": "miticides",
        "name": "Miticides",
        "items": [
          "Miticide Concentrate"
        ]
      },
      {
        "slug": "rodenticides",
        "name": "Rodenticides",
        "items": [
          "Rodent Control Bait"
        ]
      },
      {
        "slug": "molluscicides",
        "name": "Molluscicides",
        "items": []
      },
      {
        "slug": "plant-viricides",
        "name": "Plant Viricide Products",
        "items": [
          "Plant Growth Protector"
        ]
      },
      {
        "slug": "organic-protection",
        "name": "Organic Crop Protection",
        "items": [
          "Crop Protection Adjuvant"
        ]
      },
      {
        "slug": "bio-pesticides",
        "name": "Bio Pesticides",
        "items": [
          "Bio Insecticide",
          "Bio Fungicide",
          "Bio Nematicide",
          "Bio Miticide"
        ]
      },
      {
        "slug": "bio-insecticides",
        "name": "Bio Insecticides",
        "items": []
      },
      {
        "slug": "bio-fungicides",
        "name": "Bio Fungicides",
        "items": []
      },
      {
        "slug": "bio-nematicides",
        "name": "Bio Nematicides",
        "items": []
      },
      {
        "slug": "bio-miticides",
        "name": "Bio Miticides",
        "items": []
      },
      {
        "slug": "neem-products",
        "name": "Neem-Based Products",
        "items": [
          "Neem Oil Spray"
        ]
      },
      {
        "slug": "sticky-traps",
        "name": "Sticky Traps",
        "items": [
          "Sticky Trap Pack"
        ]
      },
      {
        "slug": "pheromone-traps",
        "name": "Pheromone Traps",
        "items": [
          "Pheromone Trap",
          "Pheromone Lure"
        ]
      },
      {
        "slug": "yellow-sticky",
        "name": "Yellow Sticky Cards",
        "items": []
      },
      {
        "slug": "blue-sticky",
        "name": "Blue Sticky Cards",
        "items": []
      },
      {
        "slug": "solar-traps",
        "name": "Solar Insect Traps",
        "items": []
      },
      {
        "slug": "animal-repellents",
        "name": "Animal Repellents",
        "items": []
      },
      {
        "slug": "bird-repellents",
        "name": "Bird Repellents",
        "items": []
      }
    ]
  },
  {
    "slug": "fertilizers",
    "name": "Fertilizers",
    "tagline": "Chemical, organic and water-soluble soil nutrients",
    "count": 480,
    "image": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    "subcategories": [
      {
        "slug": "chemical-fertilizers",
        "name": "Chemical Fertilizers",
        "items": [
          "NPK 19:19:19 Fertilizer",
          "NPK 20:20:20 Fertilizer",
          "Urea Fertilizer",
          "DAP Fertilizer",
          "MOP Fertilizer",
          "SSP Fertilizer",
          "Zinc Sulphate",
          "Magnesium Sulphate",
          "Calcium Nitrate",
          "Boron Fertilizer",
          "Vermicompost",
          "Soil Conditioner"
        ]
      },
      {
        "slug": "organic-fertilizers",
        "name": "Organic Fertilizers",
        "items": [
          "Organic Compost"
        ]
      },
      {
        "slug": "water-soluble-fertilizers",
        "name": "Water Soluble Fertilizers",
        "items": [
          "Water Soluble Fertilizer"
        ]
      },
      {
        "slug": "micronutrients",
        "name": "Micronutrients",
        "items": [
          "Micronutrient Mix"
        ]
      },
      {
        "slug": "humic-acid",
        "name": "Humic Acid",
        "items": [
          "Humic Acid",
          "Fulvic Acid"
        ]
      },
      {
        "slug": "fulvic-acid",
        "name": "Fulvic Acid",
        "items": []
      },
      {
        "slug": "seaweed-extract",
        "name": "Seaweed Extract",
        "items": [
          "Seaweed Extract"
        ]
      },
      {
        "slug": "amino-acid",
        "name": "Amino Acid",
        "items": []
      },
      {
        "slug": "silicon",
        "name": "Silicon",
        "items": [
          "Silicon Booster"
        ]
      },
      {
        "slug": "bio-fertilizers",
        "name": "Bio Fertilizers",
        "items": [
          "Bio Fertilizer"
        ]
      },
      {
        "slug": "mycorrhiza",
        "name": "Mycorrhiza",
        "items": []
      },
      {
        "slug": "trichoderma",
        "name": "Trichoderma",
        "items": []
      },
      {
        "slug": "azotobacter",
        "name": "Azotobacter",
        "items": []
      },
      {
        "slug": "rhizobium",
        "name": "Rhizobium",
        "items": []
      },
      {
        "slug": "psb",
        "name": "PSB",
        "items": []
      }
    ]
  },

  {
    "slug": "farm-machinery",
    "name": "Farm Machinery",
    "tagline": "Sprayers, tillers, harvesters and garden tools",
    "count": 310,
    "image": "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
    "subcategories": [
      {
        "slug": "sprayers",
        "name": "Sprayers",
        "items": [
          "Battery Sprayer",
          "Manual Sprayer",
          "Knapsack Sprayer",
          "Mini Tiller",
          "Earth Auger",
          "Chain Saw",
          "Hedge Trimmer",
          "Mini Cultivator",
          "Fruit Harvester",
          "Hand Weeder",
          "Lawn Mower"
        ]
      },
      {
        "slug": "power-equipment",
        "name": "Power Equipment",
        "items": [
          "Power Sprayer",
          "Power Weeder"
        ]
      },
      {
        "slug": "harvesting-equipment",
        "name": "Harvesting Equipment",
        "items": []
      },
      {
        "slug": "nursery-equipment",
        "name": "Nursery Equipment",
        "items": []
      },
      {
        "slug": "garden-tools",
        "name": "Garden Tools",
        "items": [
          "Garden Shredder"
        ]
      },
      {
        "slug": "seeders",
        "name": "Seeders",
        "items": [
          "Seed Drill"
        ]
      },
      {
        "slug": "transplanters",
        "name": "Transplanters",
        "items": []
      },
      {
        "slug": "chaff-cutter",
        "name": "Chaff Cutter",
        "items": [
          "Brush Cutter",
          "Chaff Cutter",
          "Sugarcane Cutter"
        ]
      },
      {
        "slug": "sugarcane-machine",
        "name": "Sugarcane Machine",
        "items": []
      },
      {
        "slug": "rice-mill",
        "name": "Rice Mill",
        "items": [
          "Rice Transplanter"
        ]
      },
      {
        "slug": "solar-dryer",
        "name": "Solar Dryer",
        "items": [
          "Solar Dryer"
        ]
      }
    ]
  },
  {
    "slug": "irrigation",
    "name": "Irrigation",
    "tagline": "Drip lines, sprinklers, pumps and pipes",
    "count": 280,
    "image": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    "subcategories": [
      {
        "slug": "drip-irrigation",
        "name": "Drip Irrigation",
        "items": [
          "Drip Irrigation Kit",
          "Inline Drip Pipe",
          "Submersible Pump",
          "Micro Sprinkler",
          "Drip Connector Kit",
          "Ball Valve",
          "Screen Filter",
          "Disc Filter",
          "Venturi Injector",
          "Hose Pipe",
          "Irrigation Controller",
          "End Cap"
        ]
      },
      {
        "slug": "drip-pipes",
        "name": "Drip Pipes",
        "items": [
          "Pipe Clamp"
        ]
      },
      {
        "slug": "sprinklers",
        "name": "Sprinklers",
        "items": [
          "Sprinkler Set"
        ]
      },
      {
        "slug": "rain-guns",
        "name": "Rain Guns",
        "items": [
          "Rain Gun"
        ]
      },
      {
        "slug": "foggers",
        "name": "Foggers",
        "items": [
          "Fogger System"
        ]
      },
      {
        "slug": "water-pumps",
        "name": "Water Pumps",
        "items": [
          "Water Pump",
          "Water Timer"
        ]
      },
      {
        "slug": "pvc-pipes",
        "name": "PVC Pipes",
        "items": [
          "PVC Pipe"
        ]
      },
      {
        "slug": "hdpe-pipes",
        "name": "HDPE Pipes",
        "items": [
          "HDPE Pipe"
        ]
      },
      {
        "slug": "valves",
        "name": "Valves",
        "items": []
      },
      {
        "slug": "filters",
        "name": "Filters",
        "items": []
      },
      {
        "slug": "fertigation-units",
        "name": "Fertigation Units",
        "items": []
      }
    ]
  },
  {
    "slug": "protected-cultivation",
    "name": "Protected Cultivation",
    "tagline": "Shade nets, mulch films and growing media",
    "count": 190,
    "image": "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    "subcategories": [
      {
        "slug": "shade-nets",
        "name": "Shade Nets",
        "items": [
          "Shade Net",
          "Plant Support Clips",
          "Trellis Net",
          "Polyhouse Sheet",
          "Seedling Tray",
          "Plant Labels",
          "Drip Stake",
          "Garden Fabric",
          "Plant Tie Roll",
          "UV Shade Cloth",
          "Plant Support Pole"
        ]
      },
      {
        "slug": "mulch-films",
        "name": "Mulch Films",
        "items": [
          "Mulch Film"
        ]
      },
      {
        "slug": "crop-covers",
        "name": "Crop Covers",
        "items": [
          "Crop Cover"
        ]
      },
      {
        "slug": "greenhouse-film",
        "name": "Greenhouse Film",
        "items": [
          "Greenhouse Film"
        ]
      },
      {
        "slug": "grow-bags",
        "name": "Grow Bags",
        "items": [
          "Grow Bag"
        ]
      },
      {
        "slug": "nursery-trays",
        "name": "Nursery Trays",
        "items": [
          "Nursery Tray",
          "Nursery Pot"
        ]
      },
      {
        "slug": "cocopeat",
        "name": "Cocopeat",
        "items": [
          "Cocopeat Block"
        ]
      },
      {
        "slug": "vermiculite",
        "name": "Vermiculite",
        "items": [
          "Vermiculite"
        ]
      },
      {
        "slug": "perlite",
        "name": "Perlite",
        "items": [
          "Perlite"
        ]
      }
    ]
  },
  {
    "slug": "urban-gardening",
    "name": "Urban Gardening",
    "tagline": "Kitchen garden kits, balcony planters and potting soils",
    "count": 144,
    "image": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    "subcategories": [
      {
        "slug": "pots-tools",
        "name": "Balcony Pots & Tools",
        "items": [
          "Ceramic Planter",
          "Plastic Pot",
          "Hanging Planter",
          "Hand Trowel",
          "Garden Fork",
          "Garden Gloves",
          "Garden Pruner",
          "Spray Bottle",
          "Seed Starter Kit",
          "Garden Tool Set"
        ]
      },
      {
        "slug": "indoor-plants",
        "name": "Indoor Plants",
        "items": [
          "Indoor Plant Pot",
          "Plant Stand",
          "Plant Food"
        ]
      },
      {
        "slug": "potting-mix",
        "name": "Potting Mix",
        "items": [
          "Potting Mix",
          "Compost Mix"
        ]
      },
      {
        "slug": "watering-cans",
        "name": "Watering Cans",
        "items": [
          "Watering Can"
        ]
      }
    ]
  },
  {
    "slug": "saplings-plants",
    "name": "Saplings & Plants",
    "tagline": "Fruit and timber crop saplings for orchard setup",
    "count": 96,
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    "subcategories": [
      {
        "slug": "medicinal-ornamental",
        "name": "Medicinal & Ornamental Plants",
        "items": [
          "Neem Sapling",
          "Rose Plant",
          "Hibiscus Plant"
        ]
      },
      {
        "slug": "timber-bamboo",
        "name": "Timber & Bamboo Saplings",
        "items": [
          "Teak Sapling",
          "Sandalwood Sapling",
          "Bamboo Plant"
        ]
      }
    ]
  },
  {
    "slug": "farm-accessories",
    "name": "Farm Accessories",
    "tagline": "Tarpaulins, crop crates, and personal safety equipment",
    "count": 260,
    "image": "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
    "subcategories": [
      {
        "slug": "tarpaulins",
        "name": "Tarpaulins",
        "items": [
          "Face Mask",
          "Raincoat",
          "Tarpaulin Sheet",
          "Plastic Basket",
          "Rope Roll",
          "Spray Nozzle",
          "LED Work Light"
        ]
      },
      {
        "slug": "safety-kits",
        "name": "Safety Kits",
        "items": [
          "Safety Gloves",
          "Safety Shoes",
          "Safety Goggles"
        ]
      },
      {
        "slug": "safety-shoes",
        "name": "Safety Shoes",
        "items": []
      },
      {
        "slug": "gloves",
        "name": "Gloves",
        "items": []
      },
      {
        "slug": "masks",
        "name": "Masks",
        "items": []
      },
      {
        "slug": "protective-clothing",
        "name": "Protective Clothing",
        "items": [
          "EC Meter"
        ]
      },
      {
        "slug": "measuring-tools",
        "name": "Measuring Tools",
        "items": [
          "Measuring Cup",
          "Tool Box",
          "Tool Belt"
        ]
      },
      {
        "slug": "moisture-meters",
        "name": "Moisture Meters",
        "items": [
          "Moisture Meter"
        ]
      },
      {
        "slug": "ph-meters",
        "name": "pH Meters",
        "items": [
          "pH Meter"
        ]
      },
      {
        "slug": "garden-hoses",
        "name": "Garden Hoses",
        "items": [
          "Garden Hose",
          "Hose Clamp",
          "Garden Scissors"
        ]
      },
      {
        "slug": "storage-bags",
        "name": "Storage Bags",
        "items": []
      },
      {
        "slug": "harvest-crates",
        "name": "Harvest Crates",
        "items": [
          "Harvest Crate"
        ]
      }
    ]
  },
  {
    "slug": "soil-water-testing",
    "name": "Soil & Water Testing",
    "tagline": "Handheld meters and complete chemical testing reagents",
    "count": 75,
    "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80",
    "subcategories": [
      {
        "slug": "soil-testing-kits",
        "name": "Soil Testing Kits",
        "items": [
          "Soil pH Test Kit",
          "Soil EC Meter",
          "Soil Moisture Meter",
          "Soil NPK Test Kit",
          "Digital Thermometer",
          "Soil Sampling Kit",
          "Soil Analysis Kit",
          "Water Testing Strips",
          "Conductivity Meter",
          "Salinity Meter",
          "Nitrate Test Kit",
          "Potassium Test Kit",
          "Calcium Test Kit",
          "Soil Health Kit"
        ]
      },
      {
        "slug": "water-testing-kits",
        "name": "Water Testing Kits",
        "items": [
          "Water pH Meter",
          "Water TDS Meter",
          "Water Hardness Test Kit",
          "Irrigation Water Test Kit"
        ]
      },
      {
        "slug": "ec-meters",
        "name": "EC Meters",
        "items": [
          "EC Meter"
        ]
      },
      {
        "slug": "ph-meters",
        "name": "pH Meters",
        "items": [
          "Phosphorus Test Kit"
        ]
      },
      {
        "slug": "tds-meters",
        "name": "TDS Meters",
        "items": []
      }
    ]
  },
  {
    "slug": "services",
    "name": "Agricultural Services",
    "tagline": "Professional crop advisory, mandi reports and soil analysis",
    "count": 35,
    "image": "https://images.unsplash.com/photo-1463123081488-729f60c3c544?w=800&q=80",
    "subcategories": [
      {
        "slug": "soil-testing",
        "name": "Soil Testing",
        "items": [
          "Soil Testing Service",
          "Water Testing Service",
          "Organic Farming Guidance",
          "Irrigation Planning",
          "Subsidy Assistance",
          "Technical Support Service"
        ]
      },
      {
        "slug": "crop-advisory",
        "name": "Crop Advisory",
        "items": [
          "Crop Advisory",
          "Crop Planning Service",
          "Weather Advisory"
        ]
      },
      {
        "slug": "pest-diagnosis",
        "name": "Pest Diagnosis",
        "items": [
          "Pest Diagnosis",
          "Disease Diagnosis"
        ]
      },
      {
        "slug": "disease-diagnosis",
        "name": "Disease Diagnosis",
        "items": []
      },
      {
        "slug": "nutrient-advisory",
        "name": "Nutrient Advisory",
        "items": [
          "Nutrient Recommendation"
        ]
      },
      {
        "slug": "weather-advisory",
        "name": "Weather Advisory",
        "items": []
      },
      {
        "slug": "government-scheme",
        "name": "Government Scheme Assistance",
        "items": [
          "Government Scheme Guidance"
        ]
      },
      {
        "slug": "crop-insurance",
        "name": "Crop Insurance Assistance",
        "items": []
      },
      {
        "slug": "bulk-orders",
        "name": "Bulk Orders",
        "items": [
          "Bulk Order Assistance"
        ]
      },
      {
        "slug": "dealer-reg",
        "name": "Dealer Registration",
        "items": [
          "Dealer Registration",
          "Distributor Registration"
        ]
      },
      {
        "slug": "distributor-reg",
        "name": "Distributor Registration",
        "items": []
      },
      {
        "slug": "farmer-training",
        "name": "Farmer Training",
        "items": [
          "Farm Consultancy",
          "Farm Visit Consultation",
          "Farmer Training Program"
        ]
      },
      {
        "slug": "consultancy",
        "name": "Consultancy",
        "items": [
          "Greenhouse Consultancy"
        ]
      }
    ]
  }
];
