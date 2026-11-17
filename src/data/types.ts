import type { StaticImageData } from "next/image";

export type NavLink = { label: string; href: string };

export type Category = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type StepAccent = "blue" | "coral" | "gold";
export type Step = {
  id: string;
  title: string;
  description: string;
  accent: StepAccent;
};

export type Stat = { value: string; label: string };

/** Without `href` the item has no page in scope and renders as plain text */
export type FooterLink = { label: string; href?: string };
export type FooterColumn = { title: string; links: FooterLink[] };

/** Position in the 500x500 mosaic (the lilac circle), in Figma px */
export type CommunityPhoto = {
  id: string;
  src: StaticImageData;
  x: number;
  y: number;
};
