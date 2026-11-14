import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  images: StaticImageData[];
  /** Outer size including the ring baked into the image files: 36 (hero) or 44 (CTA) */
  size: 36 | 44;
  className?: string;
};

/**
 * Overlapping avatars. Decorative: the text next to the stack carries the
 * meaning ("Trusted by 24,000+ learners"), so the whole group is hidden from
 * assistive technology.
 */
export function AvatarStack({ images, size, className }: AvatarStackProps) {
  return (
    <div aria-hidden="true" className={cn("flex shrink-0", className)}>
      {images.map((src, index) => (
        <Image
          key={src.src}
          src={src}
          alt=""
          width={size}
          height={size}
          // 12px overlap in both stacks (Figma: 24px and 32px steps)
          className={cn("rounded-full", index > 0 && "-ml-3")}
        />
      ))}
    </div>
  );
}
