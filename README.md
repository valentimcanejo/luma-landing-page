# Luma landing page

Responsive landing page for Luma, a learning platform, built from a Figma design with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting started

Requirements: Node.js 20.9 or later and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script                 | What it does                                   |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Development server (Turbopack)                 |
| `npm run build`        | Production build                               |
| `npm run start`        | Serves the production build                    |
| `npm run lint`         | ESLint                                         |
| `npm run typecheck`    | Generates Next.js route types, then runs `tsc` |
| `npm run format`       | Formats the code with Prettier                 |
| `npm run format:check` | Checks formatting without writing              |

## Decisions

_Draft, collected while building. Will be reorganized at the end._

### Layout and breakpoints

- Tailwind's default breakpoints. Figma has a 402px mobile frame and a 1280px desktop frame; there is no tablet frame, so tablet behavior is a decision: 40px side gutters from `md` (768px).
- The header switches to the desktop nav at `lg` (1024px). Below that, the logo, four links and two buttons do not fit comfortably.
- The hero uses two columns only from `xl` (1280px). Its 64px title needs about 560px next to the 500px image; at 1024px it would break into five lines, so between 1024 and 1279px the hero stays stacked.
- On mobile the hero image appears before the text, as in Figma, but the text stays first in the DOM so the `h1` is the first thing read. The image block has nothing focusable, so focus order is unaffected.

### Navigation

- The header is sticky. `scroll-padding-top` on `html` keeps anchored sections below it, in one place instead of on every section.
- "For Teams" and "About" have no matching sections, so they link to Contact and How it works. "Log in" links to Contact (there is no authentication in scope) and "Start learning" to the categories.
- The mobile menu follows the disclosure pattern (button with `aria-expanded` and a panel below the header), not a modal dialog, so it needs no focus trap. It closes on Escape (returning focus to the toggle), outside click, link click, focus leaving the menu and when resizing to desktop.

### Design deviations

- Hover states are not in the design: blue buttons darken to a new `blue-dark` token, yellow buttons turn `gold`, outline buttons get a navy border, links go from `muted` to `navy`.
- The avatar image files include their ring, so they are displayed at the ring's outer size from Figma (36px hero, 44px CTA) to keep the same spacing and 12px overlap.

## Known issues

- On mobile, Figma crops the hero photo to 346x380px, while the exported image (with its rounded corners baked in) has the desktop ratio of 500x520. Cropping it with `object-cover` would cut those corners, so the image keeps its natural ratio and renders at 346x360px, 20px shorter than in Figma.
- `npm audit` reports 7 moderate vulnerabilities, all in the `typescript-eslint` packages pulled in by `eslint-config-next`. They are development-only dependencies used for linting and are not part of the production bundle. `npm audit fix --force` would downgrade `eslint-config-next`, so they are left as is until upstream releases a fix.

## Time spent

| Step                                            | Time    |
| ----------------------------------------------- | ------- |
| Plan review and design analysis                 | _TBD_   |
| Setup: scaffold, design tokens, fonts, metadata | ~40 min |

## AI usage

_To be completed._
