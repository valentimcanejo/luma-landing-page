/** Clock, 20x20 with a 2px stroke, redrawn from the Figma export. Decorative by default. */
export function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="10" cy="10" r="8.33" />
      <path d="M10 5v5l3.33 1.67" />
    </svg>
  );
}
