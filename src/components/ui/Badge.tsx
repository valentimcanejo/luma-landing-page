import { cn } from "@/lib/cn";

type BadgeTone = "lilac" | "yellow" | "outline-light";
type BadgeSize = "sm" | "md" | "lg";

type BadgeProps = React.ComponentProps<"span"> & {
  tone: BadgeTone;
  size?: BadgeSize;
};

const toneClasses: Record<BadgeTone, string> = {
  lilac: "bg-lilac text-blue",
  yellow: "bg-yellow text-navy",
  "outline-light": "border border-line text-white",
};

/** Radius follows the size in Figma: 6px on the small badges and chips, 8px on the stat chip */
const sizeClasses: Record<BadgeSize, string> = {
  sm: "h-6 rounded-md px-2 type-overline", // 24px: category numbers, featured label (28px there)
  md: "h-8 rounded-lg px-1.5 type-label", // 32px: hero stat chip
  lg: "h-10 rounded-md px-[15px] type-body", // 40px: course details
};

/** Small non-interactive label. Rendered as a span so it can sit inside text. */
export function Badge({
  tone,
  size = "sm",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap",
        toneClasses[tone],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
