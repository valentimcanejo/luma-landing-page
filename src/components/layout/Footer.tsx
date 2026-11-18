import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerColumns } from "@/data/footer";

/**
 * One "Footer" navigation landmark with a heading per column, so screen
 * reader users can jump between groups without three extra landmarks.
 */
export function Footer() {
  return (
    // White focus ring: the default blue is only 3.1:1 on navy
    <footer className="bg-navy pt-15 pb-5 [--focus-ring:var(--color-white)] lg:pt-20 lg:pb-10">
      <Container>
        {/* Mobile: brand on top, link columns in a 2-column grid.
            Desktop: brand plus three 192px columns, 48px apart (Figma). */}
        <div className="grid gap-10 lg:grid-cols-[1fr_repeat(3,192px)] lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label="Luma home"
              // flex: an inline box would add the line height around the 20px logo
              className="flex w-fit rounded-sm"
            >
              <Logo tone="light" />
            </Link>
            {/* 200px keeps the Figma line break on desktop */}
            <p className="mt-1.75 type-body text-faint lg:max-w-50">
              Practical learning for curious people.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 lg:col-span-3 lg:grid-cols-subgrid lg:gap-x-12"
          >
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="type-overline text-line-soft">{column.title}</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label} className="type-body text-faint">
                      {link.href ? (
                        <Link
                          href={link.href}
                          className="hover:text-white motion-safe:transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        // No page in scope (see src/data/footer.ts)
                        link.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* 2px muted rule, measured in both Figma frames */}
        <p className="mt-9 border-t-2 border-muted pt-5 text-center text-[0.8125rem] leading-6 text-line-soft lg:mt-16 lg:text-left">
          © 2026 Luma Learning
        </p>
      </Container>
    </footer>
  );
}
