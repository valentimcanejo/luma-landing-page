import { cn } from "@/lib/cn";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Page width and side gutters: 20px on mobile (Figma), 40px on tablet
 * (no tablet frame in Figma, our decision), 80px on desktop (Figma).
 */
export function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-page px-5 md:px-10 lg:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
