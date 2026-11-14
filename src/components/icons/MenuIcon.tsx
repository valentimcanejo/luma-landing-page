/** Hamburger icon, 20x12 as in the Figma mobile header. Decorative by default. */
export function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M1 1h18M1 6h18M1 11h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
