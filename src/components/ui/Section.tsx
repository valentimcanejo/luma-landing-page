import { cn } from "@/lib/cn";
import { Container } from "./Container";

export type SectionTone = "cream" | "white" | "blue" | "yellow-soft";

type SectionProps = {
  id: string;
  /** id of the section title, announced by screen readers as the region name */
  labelledBy: string;
  tone: SectionTone;
  className?: string;
  children: React.ReactNode;
};

const toneClasses: Record<SectionTone, string> = {
  cream: "bg-cream",
  white: "bg-white",
  blue: "bg-blue text-white",
  "yellow-soft": "bg-yellow-soft",
};

/** Page section: background, vertical rhythm (60px mobile, 100px desktop) and container. */
export function Section({
  id,
  labelledBy,
  tone,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-15 lg:py-25", toneClasses[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
