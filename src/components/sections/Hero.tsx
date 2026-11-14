import Image from "next/image";
import heroImage from "@/assets/images/hero.webp";
import { StarIcon } from "@/components/icons/StarIcon";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { heroAvatars } from "@/data/avatars";

const floatingCard =
  "absolute flex items-center rounded-xl bg-white shadow-badge";

/**
 * The text comes first in the DOM (the h1 is the first thing read), and the
 * image is moved above it visually below 1280px with `order-first`. Nothing in
 * the image block is focusable, so the focus order is not affected.
 */
export function Hero() {
  return (
    <Section
      id="hero"
      labelledBy="hero-title"
      tone="cream"
      className="overflow-hidden"
    >
      {/* Two columns only from 1280px: the 64px title needs ~560px next to the
          500px image, so between 1024 and 1279 the layout stays stacked */}
      <div className="grid gap-10 xl:grid-cols-[1fr_500px] xl:items-start xl:gap-15">
        <div>
          <SectionHeader
            id="hero-title"
            as="h1"
            titleStyle="h1"
            eyebrow="Learn at your own pace"
            title="Build skills that actually move you forward."
            description="Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time."
            // 488px reproduces the Figma line breaks exactly
            descriptionClassName="mt-6 max-w-[488px]"
          />

          {/* Full width and stacked on mobile, inline from 640px */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#categories" className="w-full sm:w-auto">
              Explore courses
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              See how it works
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2.5 sm:justify-start">
            <AvatarStack images={heroAvatars} size={36} />
            <p className="type-label text-navy">
              Trusted by 24,000+{" "}
              <span className="font-normal text-muted">learners</span>
            </p>
          </div>
        </div>

        {/* Image block. Offsets below are measured from the Figma frames (mobile / desktop). */}
        <div className="order-first px-2 lg:px-0 xl:order-none">
          <div className="relative mx-auto max-w-[500px]">
            {/* Peach block: 24px from the top, sticks out 18px / 39px on the right */}
            <div
              aria-hidden="true"
              className="absolute top-6 -right-4.5 bottom-3.5 left-1/2 rounded-2xl bg-peach lg:-right-[39px] lg:bottom-7"
            />
            {/* Lilac circle: 64px / 106px, bottom left */}
            <div
              aria-hidden="true"
              className="absolute bottom-3 -left-4.5 size-16 rounded-full bg-lilac lg:bottom-[11px] lg:-left-[45px] lg:size-[106px]"
            />

            {/* Rounded corners are part of the exported image, so no rounded class here */}
            <Image
              src={heroImage}
              alt="Smiling woman with glasses taking an online lesson on her laptop, with a notebook on the desk"
              preload
              placeholder="blur"
              // 8px inset inside the 20px gutter on mobile, capped at 500px
              sizes="(min-width: 556px) 500px, calc(100vw - 56px)"
              className="relative h-auto w-full"
            />

            <p
              className={`${floatingCard} top-1.5 -left-2 gap-3 py-3 pr-4 pl-4 lg:top-4 lg:-left-[22px]`}
            >
              <Badge tone="lilac" size="md">
                120+
              </Badge>
              <span className="text-sm text-navy">expert-led courses</span>
            </p>

            <p
              className={`${floatingCard} -right-[19px] bottom-9 gap-2.5 py-3.5 pr-4 pl-[18px] lg:-right-[57px]`}
            >
              <span className="flex gap-1.5 text-yellow">
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon key={index} />
                ))}
              </span>
              <span className="text-sm text-navy">4.9 avg rating</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
