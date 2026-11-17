import type { FooterColumn } from "./types";

/**
 * Same targets as the header for the shared items (Courses, For Teams, About).
 * Careers, Journal, Terms and Privacy have no page or section in scope, so
 * they have no `href` instead of pointing to "#" or to a 404.
 */
export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#categories" },
      { label: "Categories", href: "#categories" },
      { label: "Instructors", href: "#community" },
      { label: "For Teams", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#how-it-works" },
      { label: "Careers" },
      { label: "Journal" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms" },
      { label: "Privacy" },
    ],
  },
];
