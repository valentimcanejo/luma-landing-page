/** Right arrow, 14x12 with a 1.5px stroke as in the "Explore" links. Decorative by default. */
export function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M1 6h12M8 1l5 5-5 5" />
    </svg>
  );
}
