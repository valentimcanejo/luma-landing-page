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
- The category cards use 1 column on mobile, 2 from `sm` (640px) and 4 only from `xl` (1280px). At 1024px four cards would be about 200px wide and the descriptions would wrap into five lines.
- The featured course uses two columns from `lg` (1024px), keeping the Figma proportions (538 / 522). Stacked, the image would be about 860px wide at that size.
- The "How it works" steps stay stacked until `lg` (1024px), where they become three columns with a horizontal connector. The connector is a pseudo-element of each step (except the last), so it adapts to both layouts without extra markup.
- On mobile the hero image appears before the text, as in Figma, but the text stays first in the DOM so the `h1` is the first thing read. The image block has nothing focusable, so focus order is unaffected.

### Navigation

- The header is sticky. `scroll-padding-top` on `html` keeps anchored sections below it, in one place instead of on every section.
- "For Teams" and "About" have no matching sections, so they link to Contact and How it works. "Log in" links to Contact (there is no authentication in scope) and "Start learning" to the categories.
- There are no course pages in scope, so the "Explore" links on the category cards lead to the featured course section. Each link has visually hidden text ("Explore Product Design courses") so its name makes sense out of context, for example in a screen reader's list of links.
- The testimonial section has no visible title in the design, so it gets a visually hidden `h2` ("What learners say") to keep the heading outline complete. The quote uses `figure`, `blockquote` and `figcaption`; the author photo has an empty `alt` because the name is right next to it.
- The community mosaic is one accessible image (`role="img"` with a label) whose ten photos have empty `alt`, instead of ten alt texts that would add little. The photo files include their drop shadow, so they are positioned in percentages of the 500px lilac circle and the composition scales as a whole. On mobile this is the desktop composition at 330px; the Figma mobile frame arranges the tiles slightly differently.
- "Explore teachers and students" leads to the contact form (no community page in scope).
- In the featured course, "View course" leads to the contact form (no course page in scope) and "Browse all courses" to the categories.
- The mobile menu follows the disclosure pattern (button with `aria-expanded` and a panel below the header), not a modal dialog, so it needs no focus trap. It closes on Escape (returning focus to the toggle), outside click, link click, focus leaving the menu and when resizing to desktop.

### Design deviations

- Hover states are not in the design: blue buttons darken to a new `blue-dark` token, yellow buttons turn `gold`, outline buttons get a navy border, links go from `muted` to `navy`.
- Contrast fixes (WCAG AA, 4.5:1 for normal text): on the blue section, "Browse all courses" and the mobile course detail chips use white instead of `#E7E7EC` (4.4:1); the "Step 0X" labels on cream use `#656770` instead of `#6D7384` (4.47:1).
- Figma inconsistencies, following the user's decisions: steps are numbered 01, 02, 03 (desktop shows "Step 01" three times), the page is in English, and the desktop copy wins when texts differ. The step 2 icon uses the desktop solid peach (mobile shows coral at 15% opacity).
- The global focus ring is blue, which would disappear on the blue section, so that section switches it to white through a `--focus-ring` CSS variable.
- The avatar image files include their ring, so they are displayed at the ring's outer size from Figma (36px hero, 44px CTA) to keep the same spacing and 12px overlap.

## Known issues

- On mobile, Figma crops the hero photo to 346x380px, while the exported image (with its rounded corners baked in) has the desktop ratio of 500x520. Cropping it with `object-cover` would cut those corners, so the image keeps its natural ratio and renders at 346x360px, 20px shorter than in Figma.
- Buttons are 52px tall everywhere. Figma uses 54px in the hero and community sections and 52px in the featured course, so one size was kept for consistency.
- `npm audit` reports 7 moderate vulnerabilities, all in the `typescript-eslint` packages pulled in by `eslint-config-next`. They are development-only dependencies used for linting and are not part of the production bundle. `npm audit fix --force` would downgrade `eslint-config-next`, so they are left as is until upstream releases a fix.

## Time spent

| Step                                            | Time    |
| ----------------------------------------------- | ------- |
| Plan review and design analysis                 | _TBD_   |
| Setup: scaffold, design tokens, fonts, metadata | ~40 min |

## AI usage

_To be completed._
