import { cn } from "@/lib/cn";

type BadgeTone = "lilac" | "yellow" | "outline-light";
type BadgeSize = "sm" | "md";

type BadgeProps = {
  tone: BadgeTone;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
};

const toneClasses: Record<BadgeTone, string> = {
  lilac: "rounded-lg bg-lilac text-blue",
  yellow: "rounded-md bg-yellow text-navy",
  "outline-light": "rounded-lg border border-line text-white",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "h-6 px-2 type-overline", // 24px: category numbers, featured label
  md: "h-8 px-1.5 type-label", // 32px: hero stat chip
};

/** Small non-interactive label. Rendered as a span so it can sit inside text. */
export function Badge({ tone, size = "sm", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap",
        toneClasses[tone],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
