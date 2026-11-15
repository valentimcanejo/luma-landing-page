import type { Category } from "./types";

/**
 * There are no course pages in scope, so every card leads to the featured
 * course section, the only course content on the page (documented in the README).
 * The card number (01, 02...) comes from the array order, not from the data.
 */
export const categories: Category[] = [
  {
    id: "product-design",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "#featured",
  },
  {
    id: "technology",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
    href: "#featured",
  },
  {
    id: "business",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
    href: "#featured",
  },
  {
    id: "creative",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "#featured",
  },
];
