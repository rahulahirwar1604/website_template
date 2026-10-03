export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  favoriteItem: string;
  verifiedOrder: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    author: "Elena Rostova",
    role: "Food & Travel Journalist, Bay Bites",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    comment:
      "I have tasted burgers across 30+ countries, but the lacy crispy edges on the OG Double Smash here are nothing short of culinary alchemy. The house brioche holds together effortlessly to the last drop.",
    favoriteItem: "The Classic OG Double Smash",
    verifiedOrder: true,
  },
  {
    id: "review-2",
    author: "Marcus Vance",
    role: "Local Foodie & Creative Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    comment:
      "The Truffle Mushroom Melt blew my mind. You can tell they don't take shortcuts — the gruyère is genuine, the truffle aioli is rich without overpowering the beef. And the salted caramel shake is legendary.",
    favoriteItem: "Truffle Mushroom Melt",
    verifiedOrder: true,
  },
  {
    id: "review-3",
    author: "Sophia Lin",
    role: "Tech Lead & Weekend Cyclist",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    comment:
      "Ordering through WhatsApp for quick weekend pickup was butter-smooth. The food was piping hot, fries remained miraculously crisp, and the staff treats everyone like old neighborhood friends.",
    favoriteItem: "Nashville Hot Butter Crunch",
    verifiedOrder: true,
  },
  {
    id: "review-4",
    author: "Devon Reed",
    role: "Culinary Photographer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    comment:
      "Beyond just looking gorgeous under camera lights, the texture profile is ridiculous. Sizzling crust, gooey cheese pull, fluffy bun. Bun & Bite has set an impossible standard in the city.",
    favoriteItem: "Smoky Texas Bacon Beast",
    verifiedOrder: true,
  },
];
