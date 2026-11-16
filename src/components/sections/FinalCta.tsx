import Image from "next/image";
import ctaShapes from "@/assets/images/cta-shapes.svg";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ctaAvatars } from "@/data/avatars";

export function FinalCta() {
  return (
    <Section
      id="get-started"
      labelledBy="get-started-title"
      tone="yellow-soft"
      className="relative overflow-hidden"
    >
      {/* Decorative peach shapes, exported from the Figma vectors as one SVG
          (1280 x 470, the section size). Desktop only, as in Figma. Kept at
          its design size and centered: wider screens show more background,
          narrower ones crop the outer shapes. */}
      <Image
        src={ctaShapes}
        alt=""
        className="pointer-events-none absolute top-0 left-1/2 hidden max-w-none -translate-x-1/2 lg:block"
      />

      <div className="relative flex flex-col items-center">
        {/* The image files are 44px including the ring; in Figma the ring is an
            outside stroke, so the layout box is 40px. -2px on each side keeps
            the Figma spacing. */}
        <AvatarStack images={ctaAvatars} size={44} className="-my-0.5" />

        <SectionHeader
          id="get-started-title"
          titleStyle="h2"
          align="center"
          title="What will you learn next?"
          description="Start with one course. Build from there."
          className="mt-7"
        />

        {/* Same pattern as the hero: full width and stacked on mobile */}
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="#categories" className="w-full sm:w-auto">
            Explore all courses
          </Button>
          {/* No sign-up flow in scope: leads to the contact form */}
          <Button
            href="#contact"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Join Luma
          </Button>
        </div>
      </div>
    </Section>
  );
}
