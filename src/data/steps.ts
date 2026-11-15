import type { Step } from "./types";

/**
 * Copy follows the desktop frame (mobile says "who actually use").
 * The "Step 01" label comes from the array order, not from the data.
 */
export const steps: Step[] = [
  {
    id: "choose",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    accent: "blue",
  },
  {
    id: "learn",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
    accent: "coral",
  },
  {
    id: "practice",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    accent: "gold",
  },
];
