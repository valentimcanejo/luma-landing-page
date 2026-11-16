/** Round chat bubble with three dots, 24x24, redrawn from the Figma export. Decorative by default. */
export function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M7 20.66A10 10 0 1 0 3.34 17L2.5 21.5Z" />
      <circle cx="7" cy="12" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="17" cy="12" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}
