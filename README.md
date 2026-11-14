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

_To be completed._

## Known issues

- `npm audit` reports 7 moderate vulnerabilities, all in the `typescript-eslint` packages pulled in by `eslint-config-next`. They are development-only dependencies used for linting and are not part of the production bundle. `npm audit fix --force` would downgrade `eslint-config-next`, so they are left as is until upstream releases a fix.

## Time spent

| Step                                            | Time    |
| ----------------------------------------------- | ------- |
| Plan review and design analysis                 | _TBD_   |
| Setup: scaffold, design tokens, fonts, metadata | ~40 min |

## AI usage

_To be completed._
