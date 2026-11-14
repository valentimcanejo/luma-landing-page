import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "accent";
export type ButtonSize = "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = ButtonBaseProps & { href: string } & Omit<
    React.ComponentProps<"a">,
    keyof ButtonBaseProps | "href"
  >;

type ButtonAsButton = ButtonBaseProps & { href?: undefined } & Omit<
    React.ComponentProps<"button">,
    keyof ButtonBaseProps
  >;

/** With `href` it renders a link (navigation), without it a <button> (action). */
export type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue text-white hover:bg-blue-dark",
  secondary: "border border-line bg-white text-navy hover:border-navy",
  accent: "bg-yellow text-navy hover:bg-gold",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5", // 44px, header
  lg: "h-13 px-7", // 52px, default
};

function buttonClasses({
  variant = "primary",
  size = "lg",
  className,
}: Omit<ButtonBaseProps, "children">) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg type-label whitespace-nowrap",
    "motion-safe:transition-colors",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant, size, className, children, ...linkProps } = props;
    return (
      <Link
        {...linkProps}
        className={buttonClasses({ variant, size, className })}
      >
        {children}
      </Link>
    );
  }

  const {
    variant,
    size,
    className,
    children,
    type = "button",
    ...buttonProps
  } = props;
  return (
    <button
      {...buttonProps}
      type={type}
      className={buttonClasses({ variant, size, className })}
    >
      {children}
    </button>
  );
}
