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

const titleStyles: Record<TitleStyle, string> = {
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
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
          titleStyles[titleStyle],
          light ? "text-white" : "text-navy",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-4 type-subtitle-1",
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
