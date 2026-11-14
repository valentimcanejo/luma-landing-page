import { cn } from "@/lib/cn";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
};

// TODO(figma): replace the text logo with the exported SVG
export function Logo({ tone = "dark", className }: LogoProps) {
  return (
    <span
      className={cn(
        // ~20px measured from the 42px-wide wordmark in the Figma export
        "font-display text-xl leading-none font-extrabold tracking-tight",
        tone === "dark" ? "text-navy" : "text-white",
        className,
      )}
    >
      luma<span className="text-blue">.</span>
    </span>
  );
}
