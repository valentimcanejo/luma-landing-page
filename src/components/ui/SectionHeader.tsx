import { cn } from "@/lib/cn";

type TitleStyle = "h1" | "h2" | "h3";

type SectionHeaderProps = {
  /** Referenced by the parent Section's aria-labelledby */
  id: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Semantic level. Independent from the visual style below. */
  as?: "h1" | "h2";
  /** Figma text style. Most section titles are h2 elements styled as H3. */
  titleStyle?: TitleStyle;
  align?: "left" | "center";
  /** light: white text on the blue section */
  tone?: "dark" | "light";
  className?: string;
  descriptionClassName?: string;
};

/**
 * Text style plus the gaps around the title, which change with the style in
 * Figma (H1 in the hero: 12 / 24, H3 in Categories and How it works: 14 / 18).
 */
const titleStyles: Record<
  TitleStyle,
  { title: string; eyebrowGap: string; descriptionGap: string }
> = {
  h1: { title: "type-h1", eyebrowGap: "mt-3", descriptionGap: "mt-6" },
  // TODO(figma): H2 gaps copied from H3, measure them in the final CTA step
  h2: { title: "type-h2", eyebrowGap: "mt-3.5", descriptionGap: "mt-4.5" },
  h3: { title: "type-h3", eyebrowGap: "mt-3.5", descriptionGap: "mt-4.5" },
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  titleStyle = "h3",
  align = "left",
  tone = "dark",
  className,
  descriptionClassName,
}: SectionHeaderProps) {
  const light = tone === "light";
  const style = titleStyles[titleStyle];

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className={cn("type-overline", light ? "text-white" : "text-blue")}>
          {eyebrow}
        </p>
      )}
      <Heading
        id={id}
        className={cn(
          style.title,
          light ? "text-white" : "text-navy",
          eyebrow && style.eyebrowGap,
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            style.descriptionGap,
            "type-subtitle-1",
            light ? "text-white" : "text-muted",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
