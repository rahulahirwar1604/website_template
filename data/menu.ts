export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: MenuCategory;
  image: string;
  /** Illustrative template rating (1-5). Rendered with sample badge/label in UI. */
  rating: number;
  /** Illustrative review count (not verified customer feedback; template demonstration). */
  reviewsCount: number;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isChefSpecial?: boolean;
  calories?: number;
  badges?: string[];
  ingredients?: string[];
}

export type MenuCategory =
  | "Signature Smashes"
  | "Crispy Chicken"
  | "Plant & Green"
  | "Loaded Sides"
  | "Artisan Shakes & Drinks";

export const menuCategories: MenuCategory[] = [
  "Signature Smashes",
  "Crispy Chicken",
  "Plant & Green",
  "Loaded Sides",
  "Artisan Shakes & Drinks",
];

export const menuItems: MenuItem[] = [
  // Signature Smashes
  {
    id: "classic-og-smash",
    name: "The Classic OG Double Smash",
    slug: "classic-og-smash",
    description:
      "Two 100% Angus smash patties, double American cheddar, caramelized onions, house pickles, and our secret Bun&Bite relish on a butter-toasted brioche bun.",
    price: 12.99,
    originalPrice: 14.99,
    category: "Signature Smashes",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 1420,
    isPopular: true,
    isChefSpecial: true,
    calories: 780,
    badges: ["Best Seller", "Chef's Pick"],
    ingredients: ["Double Angus Beef", "Aged Cheddar", "Caramelized Onions", "House Relish", "Brioche"],
  },
  {
    id: "truffle-melt-smash",
    name: "Truffle Mushroom Melt",
    slug: "truffle-melt-smash",
    description:
      "Seared double beef smash, Swiss gruyère, sautéed balsamic button mushrooms, roasted garlic aioli, and shaved summer black truffle infusion.",
    price: 15.49,
    category: "Signature Smashes",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 890,
    isPopular: true,
    calories: 840,
    badges: ["Gourmet Special"],
    ingredients: ["Angus Beef", "Swiss Gruyère", "Balsamic Mushrooms", "Black Truffle Aioli", "Brioche"],
  },
  {
    id: "smoky-bacon-bbq",
    name: "Smoky Texas Bacon Beast",
    slug: "smoky-bacon-bbq",
    description:
      "Double Angus smash, thick-cut applewood smoked bacon, crispy golden onion tanglers, sharp Monterey Jack, and slow-smoked bourbon BBQ sauce.",
    price: 14.99,
    category: "Signature Smashes",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 1105,
    isPopular: true,
    calories: 920,
    badges: ["Crowd Favorite"],
    ingredients: ["Double Patty", "Applewood Bacon", "Onion Tanglers", "Bourbon BBQ", "Jack Cheese"],
  },
  {
    id: "inferno-jalapeno",
    name: "Inferno Ghost Pepper Smash",
    slug: "inferno-jalapeno",
    description:
      "Fire-seared double beef with smoked pepper jack, charred serrano peppers, spicy pickled jalapeños, and habanero honey-crema.",
    price: 13.99,
    category: "Signature Smashes",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 640,
    isSpicy: true,
    calories: 810,
    badges: ["Spicy Fiery"],
    ingredients: ["Double Angus Beef", "Pepper Jack", "Charred Serranos", "Pickled Jalapeños", "Habanero Crema"],
  },

  // Crispy Chicken
  {
    id: "hot-nashville-crunch",
    name: "Nashville Hot Butter Crunch",
    slug: "hot-nashville-crunch",
    description:
      "24-hour buttermilk soaked free-range chicken thigh, tossed in spicy Nashville cayenne glaze, cool creamy dill slaw, and kosher pickles.",
    price: 13.49,
    category: "Crispy Chicken",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 980,
    isPopular: true,
    isSpicy: true,
    calories: 760,
    badges: ["Crispy Perfection"],
    ingredients: ["Buttermilk Fried Chicken", "Nashville Cayenne Glaze", "Creamy Slaw", "Kosher Pickles"],
  },
  {
    id: "honey-garlic-chicken",
    name: "Golden Honey Mustard Crunch",
    slug: "honey-garlic-chicken",
    description:
      "Extra crisp chicken cutlet, melted Colby jack cheese, honey Dijon glaze, shredded lettuce, and pickled red onions on toasted potato bun.",
    price: 12.99,
    category: "Crispy Chicken",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 710,
    calories: 720,
    ingredients: ["Crispy Fried Chicken", "Honey Dijon", "Colby Jack", "Pickled Red Onions"],
  },

  // Plant & Green
  {
    id: "beyond-truffle-stack",
    name: "The Earth Burger (Plant-Based)",
    slug: "beyond-truffle-stack",
    description:
      "100% plant-protein smash patty with vegan cheddar, roasted garlic veganaise, avocado mash, heirloom tomato, and organic arugula.",
    price: 13.99,
    category: "Plant & Green",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 520,
    isVegetarian: true,
    calories: 590,
    badges: ["Plant Power"],
    ingredients: ["Plant Protein Patty", "Avocado Mash", "Vegan Cheddar", "Wild Arugula", "Vegan Brioche"],
  },
  {
    id: "halloumi-avocado-crisp",
    name: "Golden Halloumi Stack",
    slug: "halloumi-avocado-crisp",
    description:
      "Thick-cut grilled Cypriot halloumi cheese, roasted red pepper pesto, fresh basil, crispy salad greens, and balsamic glaze drizzle.",
    price: 12.49,
    category: "Plant & Green",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 430,
    isVegetarian: true,
    calories: 620,
    ingredients: ["Grilled Halloumi", "Roasted Red Pepper Pesto", "Fresh Basil", "Balsamic Glaze"],
  },

  // Loaded Sides
  {
    id: "truffle-parm-fries",
    name: "Truffle & Parmesan Herb Fries",
    slug: "truffle-parm-fries",
    description:
      "Hand-cut Idaho Russet potatoes double-fried to golden crispness, tossed with black truffle sea salt, 24-month aged Parmigiano, and rosemary.",
    price: 6.99,
    category: "Loaded Sides",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 1650,
    isPopular: true,
    isVegetarian: true,
    calories: 440,
    badges: ["Top Side"],
    ingredients: ["Double-Fried Potatoes", "Truffle Oil", "Shaved Parmesan", "Fresh Rosemary"],
  },
  {
    id: "loaded-cheddar-bacon-fries",
    name: "Dirty Smashed Loaded Fries",
    slug: "loaded-cheddar-bacon-fries",
    description:
      "Crispy waffle fries smothered with hot cheese sauce, chopped smash patty bits, smoky bacon crumbles, jalapeños, and signature sauce drizzle.",
    price: 8.99,
    category: "Loaded Sides",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 1280,
    calories: 680,
    badges: ["Ultimate Munch"],
    ingredients: ["Waffle Fries", "Warm Cheddar Sauce", "Smash Beef Bits", "Bacon", "Chives"],
  },
  {
    id: "crispy-onion-rings",
    name: "Beer-Battered Sweet Onion Rings",
    slug: "crispy-onion-rings",
    description:
      "Colossal sweet Vidalia onions dipped in craft IPA batter, served ultra-crisp with house smoked campfire dipping sauce.",
    price: 6.49,
    category: "Loaded Sides",
    image: "/images/menu/onion-rings.jpg",
    rating: 4.6,
    reviewsCount: 390,
    isVegetarian: true,
    calories: 410,
    ingredients: ["Vidalia Onions", "Craft IPA Batter", "Smoky Dipping Sauce"],
  },

  // Artisan Shakes & Drinks
  {
    id: "salted-caramel-pretzel-shake",
    name: "Salted Caramel Pretzel Shake",
    slug: "salted-caramel-pretzel-shake",
    description:
      "Slow-churned Madagascar vanilla bean custard, butterscotch caramel ribbon, crushed sea salt pretzels, and towering whipped cream.",
    price: 7.49,
    category: "Artisan Shakes & Drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 840,
    isPopular: true,
    calories: 620,
    badges: ["Signature Shake"],
    ingredients: ["Vanilla Custard", "Fleur de Sel Caramel", "Pretzel Crunch", "Whipped Cream"],
  },
  {
    id: "dark-belgian-chocolate-shake",
    name: "Belgian Dark Truffle Shake",
    slug: "dark-belgian-chocolate-shake",
    description:
      "70% rich Belgian dark chocolate custard shake, fudge ganache swirl, and cocoa nib crunch topping.",
    price: 7.49,
    category: "Artisan Shakes & Drinks",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 620,
    calories: 650,
    ingredients: ["Belgian Dark Chocolate", "Fudge Ganache", "Cream Custard", "Cocoa Nibs"],
  },
  {
    id: "sparkling-yuzu-lemonade",
    name: "Cold-Pressed Yuzu Mint Lemonade",
    slug: "sparkling-yuzu-lemonade",
    description:
      "Zesty fresh-squeezed Meyer lemons, Japanese yuzu citrus, crushed organic mint leaves, and light sparkling effervescence.",
    price: 4.99,
    category: "Artisan Shakes & Drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviewsCount: 310,
    calories: 140,
    ingredients: ["Fresh Meyer Lemon", "Yuzu Extract", "Crushed Mint", "Sparkling Water"],
  },
];
