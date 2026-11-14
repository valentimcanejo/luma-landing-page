/** Filled star, 10x10 as in the rating badge. Decorative by default. */
export function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M5 0l1.18 3.38 3.57.08-2.84 2.17 1.03 3.42L5 7.03 2.06 9.05l1.03-3.42L.25 3.46l3.57-.08z" />
    </svg>
  );
}
