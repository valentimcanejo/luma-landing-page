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
        // 20px renders the wordmark at ~53px wide, the Figma export measures 54px
        "font-display text-xl leading-none font-extrabold tracking-tight",
        tone === "dark" ? "text-navy" : "text-white",
        className,
      )}
    >
      luma.
    </span>
  );
}
