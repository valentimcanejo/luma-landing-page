"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { NavLink } from "@/data/types";

type MobileMenuProps = {
  links: NavLink[];
  login: NavLink;
  cta: NavLink;
};

/**
 * Disclosure pattern: a toggle button with aria-expanded that shows a panel
 * right below it in the DOM, so Tab moves naturally from the button into the
 * links. The panel is not modal, so there is no focus trap.
 */
export function MobileMenu({ links, login, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Listeners only exist while the menu is open
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus(); // return focus to the control that opened it
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    // Resizing to desktop hides the toggle, so the open state must not linger
    const desktop = window.matchMedia("(min-width: 64rem)");
    function onBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, [open]);

  // Close when keyboard focus moves to an element outside the menu (Tab past the last item)
  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    const next = event.relatedTarget;
    if (next && !event.currentTarget.contains(next)) setOpen(false);
  }

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} onBlur={handleBlur} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        // 44x44 touch target; the negative margin aligns the 20px icon with the gutter
        className="-mr-3 inline-flex size-11 items-center justify-center rounded-lg text-navy"
      >
        <span className="sr-only">Menu</span>
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Positioned against the sticky header, right below its bottom border */}
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-cream shadow-card"
      >
        <Container className="pt-2 pb-6">
          <nav aria-label="Main">
            <ul>
              {links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="flex min-h-12 items-center rounded-sm type-subtitle-1 text-navy hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-line pt-6">
            <Button href={login.href} variant="secondary" onClick={close}>
              {login.label}
            </Button>
            <Button href={cta.href} onClick={close}>
              {cta.label}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
