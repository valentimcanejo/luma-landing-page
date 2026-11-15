import type { StepAccent } from "@/data/types";

/**
 * Decorative 56px shapes drawn with CSS, sizes and offsets measured in Figma.
 * Hidden from screen readers: the step title already says everything.
 */
export function StepIcon({ accent }: { accent: StepAccent }) {
  return (
    <div aria-hidden="true" className="relative size-14">
      {accent === "blue" && (
        <>
          <div className="size-full rounded-full bg-lilac" />
          <div className="absolute top-2 left-2 size-6 rounded-md bg-blue" />
        </>
      )}
      {accent === "coral" && (
        <>
          {/* Peach as in desktop (mobile Figma uses coral at 15% opacity) */}
          <div className="size-full rotate-12 rounded-lg bg-peach" />
          <div className="absolute top-6 left-6 size-7 rounded-full bg-coral" />
        </>
      )}
      {accent === "gold" && (
        <>
          <div className="size-full rounded-xl bg-yellow-soft" />
          <div className="absolute top-7 left-2 size-5 rounded-full bg-gold" />
        </>
      )}
    </div>
  );
}
