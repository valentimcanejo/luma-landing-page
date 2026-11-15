import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepIcon } from "@/components/ui/StepIcon";
import { steps } from "@/data/steps";

/**
 * Connector between steps, drawn by every step except the last:
 * - mobile: vertical, 50px, starting 28px below the step and ending on the
 *   next icon (so the steps are 78px apart)
 * - desktop: horizontal, through the icon centers, from the icon to the
 *   next column (it runs under the 80px gap). Icons sit above it (z-10).
 */
const connector =
  "after:absolute after:bg-line last:after:hidden " +
  "after:top-full after:left-7 after:mt-7 after:h-[50px] after:w-px " +
  "lg:after:top-7 lg:after:-right-20 lg:after:left-14 lg:after:mt-0 lg:after:h-px lg:after:w-auto";

export function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-it-works-title" tone="cream">
      <SectionHeader
        id="how-it-works-title"
        align="center"
        eyebrow="How Luma works"
        title="Less browsing. More learning."
      />

      {/* Stacked until 1024px: three 320px columns with 80px gaps on desktop.
          The extra 30px at the bottom reproduces the Figma section height. */}
      <ol className="mt-11 grid gap-19.5 lg:mt-27 lg:grid-cols-3 lg:gap-20 lg:pb-7.5">
        {steps.map((step, index) => (
          <li key={step.id} className={`relative ${connector}`}>
            <div className="relative z-10">
              <StepIcon accent={step.accent} />
            </div>
            {/* muted instead of the Figma #6D7384: 4.5:1 contrast on cream */}
            <p className="mt-5.5 type-overline text-muted">
              Step {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2.25 type-h5 text-navy">{step.title}</h3>
            <p className="mt-3.5 type-subtitle-2 text-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
