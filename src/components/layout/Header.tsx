import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { loginLink, mainNav, startLink } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

const navLinkClasses =
  "type-label text-muted hover:text-navy motion-safe:transition-colors";

/**
 * Server Component. Only the mobile menu needs state, so it is the only
 * client island here. Desktop layout is a 3-column grid so the nav stays
 * centered on the page regardless of the logo and actions widths.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 h-header border-b border-line bg-cream">
      <Container className="flex h-full items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          aria-label="Luma home"
          className="justify-self-start rounded-sm"
        >
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-8">
            {mainNav.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={navLinkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 justify-self-end lg:flex">
          <Link href={loginLink.href} className={navLinkClasses}>
            {loginLink.label}
          </Link>
          <Button href={startLink.href} size="md">
            {startLink.label}
          </Button>
        </div>

        <MobileMenu links={mainNav} login={loginLink} cta={startLink} />
      </Container>
    </header>
  );
}
