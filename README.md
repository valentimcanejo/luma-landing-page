# Luma landing page

Responsive landing page for Luma, a learning platform, built from a Figma design with Next.js (App Router), TypeScript and Tailwind CSS.

The page has ten sections: header with mobile menu, hero, categories, featured course, how it works, testimonial and stats, community, contact form, final call to action and footer. It follows the 402px mobile and 1280px desktop Figma frames and is usable from 320px upwards.

## Getting started

Requirements: Node.js 22.12 or later and npm (Next.js alone runs on 20.9, Vitest 5 needs 22.12).

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
| `npm test`             | Runs the tests once (Vitest)                   |
| `npm run test:watch`   | Runs the tests in watch mode                   |

### Project structure

```
src/
  app/          layout, page, global styles and design tokens, favicon
  components/
    layout/     header, mobile menu, footer
    sections/   one component per page section
    ui/         shared pieces (Container, Section, Button, Badge, SectionHeader, ...)
    icons/      inline SVG icons
  data/         section content as typed arrays, kept out of the markup
  lib/          cn() helper and the contact form validation
  assets/       images exported from Figma
```

## Decisions

### Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. The only runtime dependencies besides those are `clsx` and `tailwind-merge`, behind a small `cn()` helper.
- No component library, animation library or form library. The page is static and the only form has three fields, so they would add weight and indirection without solving a real problem.
- Everything is a server component except the mobile menu and the contact form, the only parts with client state.
- Design tokens (colors, fonts, type scale) live in `globals.css` through Tailwind 4's `@theme`, so the Figma values have one source and are used as normal utilities (`bg-navy`, `type-h2`).

### Layout and breakpoints

- Tailwind's default breakpoints. Figma has a 402px mobile frame and a 1280px desktop frame; there is no tablet frame, so tablet behavior is a decision: 40px side gutters from `md` (768px).
- The header switches to the desktop nav at `lg` (1024px). Below that, the logo, four links and two buttons do not fit comfortably.
- The hero uses two columns only from `xl` (1280px). Its 64px title needs about 560px next to the 500px image; at 1024px it would break into five lines, so between 1024 and 1279px the hero stays stacked.
- The category cards use 1 column on mobile, 2 from `sm` (640px) and 4 only from `xl` (1280px). At 1024px four cards would be about 200px wide and the descriptions would wrap into five lines.
- The featured course uses two columns from `lg` (1024px), keeping the Figma proportions (538 / 522). Stacked, the image would be about 860px wide at that size.
- The "How it works" steps stay stacked until `lg` (1024px), where they become three columns with a horizontal connector. The connector is a pseudo-element of each step (except the last), so it adapts to both layouts without extra markup.
- On mobile the hero image appears before the text, as in Figma, but the text stays first in the DOM so the `h1` is the first thing read. The image block has nothing focusable, so focus order is unaffected.

### Navigation and links

- The header is sticky. `scroll-padding-top` on `html` keeps anchored sections below it, in one place instead of on every section.
- The mobile menu follows the disclosure pattern (button with `aria-expanded` and a panel below the header), not a modal dialog, so it needs no focus trap. It closes on Escape (returning focus to the toggle), outside click, link click, focus leaving the menu and when resizing to desktop.
- The design has links and buttons with no destination in scope. Each one points to the closest section on the page instead of `#`:

  | Element                                      | Goes to         |
  | -------------------------------------------- | --------------- |
  | "For Teams", "Log in"                        | Contact         |
  | "About"                                      | How it works    |
  | "Start learning", "Browse all courses"       | Categories      |
  | Category "Explore" links                     | Featured course |
  | "View course"                                | Contact         |
  | "Explore teachers and students", "Join Luma" | Contact         |

- Each category "Explore" link has visually hidden text ("Explore Product Design courses") so its name makes sense out of context, for example in a screen reader's list of links.
- In the footer, Careers, Journal, Terms and Privacy have no page or section in scope, so they render as plain text rather than links to `#` or to a 404. Links shared with the header go to the same sections.

### Sections

- Testimonial: the section has no visible title in the design, so it gets a visually hidden `h2` ("What learners say") to keep the heading outline complete. The quote uses `figure`, `blockquote` and `figcaption`; the author photo has an empty `alt` because the name is right next to it.
- Community: the mosaic is one accessible image (`role="img"` with a label) whose ten photos have empty `alt`, instead of ten alt texts that would add little. The photo files include their drop shadow, so they are positioned in percentages of the 500px lilac circle and the composition scales as a whole. On mobile this is the desktop composition at 330px; the Figma mobile frame arranges the tiles slightly differently.
- Final CTA: the decorative peach shapes (desktop only in Figma) were exported from the Figma vectors into one SVG (`src/assets/images/cta-shapes.svg`, about 16 KB, with redundant outline paths removed). It is a single `<img alt="">` at its design size (1280 x 470), centered and clipped by the section, so wider screens show more background and narrower desktops crop the outer shapes, without ever overlapping the content.
- Footer: one `nav` landmark ("Footer") with an `h2` per column, instead of three landmarks. On desktop the link columns use CSS subgrid to sit on the same 192px tracks as the Figma layout.
- The avatar image files include their ring, so they are displayed at the ring's outer size from Figma (36px hero, 44px CTA) to keep the same spacing and 12px overlap.

### Contact form

Client side only (no backend in scope).

- Validation lives in a pure function, `src/lib/validateContact.ts`, with no React or DOM, so it can be unit tested on its own. Only the form is a client component; the rest of the section is rendered on the server.
- `noValidate` replaces the browser bubbles (inconsistent and not stylable) with inline messages linked through `aria-describedby` and `aria-invalid`. Fields keep `required`, so assistive technology still announces them as required.
- Errors appear on submit, then each field is re-validated while typing so its message disappears as soon as it is fixed. On a failed submit, focus moves to the first invalid field.
- A valid submit resets the form and shows a confirmation in a `role="status"` region that is always in the DOM, so screen readers announce it.

### Design deviations

- Hover states are not in the design: blue buttons darken to a new `blue-dark` token, yellow buttons turn `gold`, outline buttons get a navy border, links go from `muted` to `navy`.
- Contrast fixes (WCAG AA, 4.5:1 for normal text): on the blue section, "Browse all courses" and the mobile course detail chips use white instead of `#E7E7EC` (4.4:1); the "Step 0X" labels on cream use `#656770` instead of `#6D7384` (4.47:1).
- Form details not in the design: a `danger` color for errors (`#C0352B`, 5.9:1 on white; the Figma coral is about 2.8:1), placeholders in `muted` instead of `#6D7384` (4.47:1 on the cream fields), and 16px input text below 640px, because iOS Safari zooms into inputs with smaller text. The contact description stays at the shared 16px on mobile (Figma uses 14px only in this section).
- The global focus ring is blue, which would disappear on the blue section (and is only 3.1:1 on the navy footer), so those two areas switch it to white through a `--focus-ring` CSS variable.
- Figma inconsistencies: steps are numbered 01, 02, 03 (desktop shows "Step 01" three times), the whole page is in English (the mobile contact form is in Portuguese), and the desktop copy wins when texts differ. The step 2 icon uses the desktop solid peach (mobile shows coral at 15% opacity).

## Accessibility

Manual pass on the full page, in the browser, with the keyboard and the DevTools accessibility tree:

- One `h1`, no skipped heading levels, every section labelled by its title.
- A skip link to the main content, landmarks for header, main and footer.
- No broken `aria-*` references or duplicate ids.
- Every image with an `alt` (empty when decorative), every field with a label.
- All text at or above WCAG AA contrast; the closest pair is the Figma blue on lilac at 4.5:1.
- Keyboard order follows the visual order, with a visible focus ring on every background.
- Smooth scrolling only without `prefers-reduced-motion`.
- No horizontal scroll at 320px.

The pass found one bug, fixed in its own commit: the skip link had no padding when focused, because Tailwind's `not-sr-only` resets it.

Not tested with a screen reader: the announcements described above (field requirements, error messages, the form confirmation) follow the ARIA patterns and were checked in the accessibility tree, not with NVDA or VoiceOver.

## Tests

```bash
npm test
```

- Vitest + Testing Library cover the contact form, the only part of the page with logic. `validateContact` is a pure function, tested directly (empty and whitespace-only values, invalid emails, minimum message length). The `ContactForm` tests go through the UI like a user would (`user-event`, queries by label and role): focus moves to the first invalid field, errors are linked with `aria-describedby`, an error clears as soon as the field is fixed, and a valid submit announces the confirmation and resets the form.
- The tests were checked by breaking the component on purpose (removing the focus call and the `aria-describedby` link): the related tests failed as expected.
- No `vite-tsconfig-paths` plugin: Vite 8 resolves the `@/*` alias from `tsconfig.json` with `resolve.tsconfigPaths`.

## Performance

Lighthouse 13.6 on the production build (`next build && next start`), headless Chrome:

| Preset  | Performance | Accessibility | Best Practices | SEO | LCP   | TBT   | CLS |
| ------- | ----------- | ------------- | -------------- | --- | ----- | ----- | --- |
| Mobile  | 95-96       | 100           | 100            | 100 | 2.9 s | 40 ms | 0   |
| Desktop | 100         | 100           | 100            | 100 | 0.7 s | 0 ms  | 0   |

- The mobile LCP (the hero photo) is 2.9 s in Lighthouse's simulated slow 4G, but 1.85 s with real throttling (`--throttling-method=devtools`), where it paints together with the first paint. The critical path is the HTML, the CSS (7 KB) and the two variable fonts (75 KB); the JavaScript (about 150 KB, almost all React and Next.js runtime) only arrives after the LCP. The simulation still counts it because, on localhost, the scripts finish before the photo paints.
- The hero image uses `loading="eager"` and `fetchPriority="high"` instead of `preload`, as the Next.js 16 docs recommend for an LCP image. The score did not change, but the preload link now carries `fetchpriority="high"`.
- The community photos had a fixed `sizes="150px"`, so the browser downloaded 256px files for photos shown at 111px. Each photo now gets its real rendered width (desktop and mobile), which cut the desktop page weight from 477 KB to 393 KB.
- Best Practices was 96 only because `/favicon.ico` returned 404. Figma has no favicon, so `src/app/icon.svg` is a "l." monogram taken from the footer wordmark (white on navy), drawn with shapes instead of text because an SVG favicon cannot load the page fonts.
- Not changed: "unused" and "legacy" JavaScript (27 KB and 14 KB) are inside the Next.js runtime chunk, and the render-blocking CSS is the 7 KB Tailwind stylesheet, which is cheaper to keep as one cached file than to inline.

## Known issues

- Some typography values could not be read reliably from the Figma export and are estimates from comparing the render with the design: H1 mobile tracking, H2 to H5 weight and tracking, the quote weight, the testimonial author weight, overline and button weight and the overline tracking. Each one is marked with a `TODO(figma)` comment (`grep -rn "TODO(figma)" src`).
- The overlines seem to have a 12px line box in Figma (their top sits exactly on the section padding), while ours use 16px, so the content below every overline sits about 2px lower than in the design.
- The logo is set as text with the brand font instead of the exported vector (`TODO(figma)` in `Logo.tsx`).
- On mobile, Figma crops the hero photo to 346x380px, while the exported image (with its rounded corners baked in) has the desktop ratio of 500x520. Cropping it with `object-cover` would cut those corners, so the image keeps its natural ratio and renders at 346x360px, 20px shorter than in Figma.
- Buttons are 52px tall everywhere. Figma uses 54px in the hero and community sections and 52px in the featured course, so one size was kept for consistency.
- `npm audit` reports 18 vulnerabilities (6 moderate, 12 high), all in development-only tooling that is not part of the production bundle: `typescript-eslint` (pulled in by `eslint-config-next`), and a ReDoS advisory in `picomatch`, the glob matcher used by ESLint, Vite and Vitest, which has no patched version yet. These tools only match glob patterns from this repo's own config, never user input. `npm audit fix --force` would downgrade `eslint-config-next`, so they are left as is until upstream releases a fix.

## Time spent

Roughly 8 to 12 hours over 5 days (November 14 to 19). I can't give an exact number because I worked asynchronously: I would hand a task to the AI agent, step away, and come back to review the result, so wall-clock time and active time don't match. The estimate includes reviewing AI output, checking measurements against the Figma files and testing in the browser. Commit timestamps are not a good proxy either, since several commits were made in batches at the end of a session.

## AI usage

I used Claude Code (Anthropic) in the terminal as a pair programmer for the whole project.

How I used it:

- Planning the build order and reviewing the design for inconsistencies before writing code. The decisions above (step numbering, language, which copy wins) were mine, made from the list it raised.
- Measuring the design: reading spacing, sizes and colors from the Figma PDF exports and comparing them with the rendered page at 402px and 1280px.
- Writing the code in small steps, one section per step, each explained before I accepted it.
- Running the accessibility pass, the Lighthouse audits and the tests.

How I checked the output:

- Every step was reviewed by me before it was committed, and each commit passed Prettier, ESLint, `tsc` and `next build`.
- Layout was compared with the Figma measurements in the browser, not trusted from the code.
- Values that could not be confirmed were marked `TODO(figma)` instead of being presented as exact (see Known issues).
- The tests were verified by breaking the component on purpose and watching them fail.
- Library choices and APIs were checked against the Next.js 16 docs shipped in `node_modules`, since this version differs from what the model knew (for example `priority` being deprecated on `next/image`).
