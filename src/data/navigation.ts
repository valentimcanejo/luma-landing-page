import type { NavLink } from "./types";

/**
 * Header links point to sections of this page. The design has no
 * "For Teams" or "About" sections, so they go to the closest match
 * (documented in the README).
 */
export const mainNav: NavLink[] = [
  { label: "Courses", href: "#categories" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#how-it-works" },
];

/** There is no authentication in scope: "Log in" leads to the contact form. */
export const loginLink: NavLink = { label: "Log in", href: "#contact" };

export const startLink: NavLink = {
  label: "Start learning",
  href: "#categories",
};
