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

export type FooterColumn = { title: string; links: NavLink[] };

export type CommunityPhoto = { id: string; src: StaticImageData };
