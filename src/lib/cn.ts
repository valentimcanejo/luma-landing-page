import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Joins class names and resolves Tailwind conflicts, so a `className` prop
 * passed to a component can override its default classes (last one wins).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
