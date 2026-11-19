import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { communityPhotos } from "@/data/community";

/** Size of the mosaic in Figma (the lilac circle); positions are relative to it */
const MOSAIC_SIZE = 500;
/** The mosaic is capped at 330px below the sm breakpoint (Figma mobile) */
const MOSAIC_SIZE_MOBILE = 330;
const toPercent = (value: number) => `${(value / MOSAIC_SIZE) * 100}%`;

/**
 * Each photo is displayed at half its pixel width inside the 500px mosaic,
 * scaled down with it on mobile. An exact `sizes` lets the browser pick the
 * smallest file from the srcset (a fixed 150px over-fetched most photos).
 */
function photoSizes(pixelWidth: number) {
  const desktop = pixelWidth / 2;
  const mobile = Math.ceil((desktop * MOSAIC_SIZE_MOBILE) / MOSAIC_SIZE);
  return `(min-width: 640px) ${desktop}px, ${mobile}px`;
}

export function Community() {
  return (
    <Section id="community" labelledBy="community-title" tone="cream">
      {/* Two columns from 1280px, like the hero: next to the 500px mosaic,
          the 48px title would wrap into four lines at 1024px. The mosaic
          column is 515px because the circle ends 15px before the container edge. */}
      <div className="grid gap-5.5 xl:grid-cols-[1fr_515px] xl:items-center xl:gap-15">
        <div>
          <SectionHeader
            id="community-title"
            eyebrow="The people"
            title="Meet international students & teachers"
            // This section uses tighter / larger gaps than the other H3 headers in Figma
            titleClassName="mt-1.5"
            descriptionClassName="mt-6 max-w-134 lg:mt-8.5"
            description="Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer."
          />
          {/* No community page in scope: leads to the contact form */}
          <Button
            href="#contact"
            variant="secondary"
            className="mt-6 lg:mt-8.5"
          >
            Explore teachers and students
          </Button>
        </div>

        {/* One accessible image for the whole collage instead of ten alt texts.
            Positions are percentages, so the composition scales as a whole
            (330px on mobile as in Figma, 500px on desktop). On desktop the Figma
            mosaic group is 522px tall, 11px above and below the circle. */}
        <div
          role="img"
          aria-label="Collage of Luma students and teachers learning at home, in class and online"
          className="relative mx-auto aspect-square w-full max-w-[330px] sm:max-w-[500px] xl:mx-0 xl:my-2.75"
        >
          <div className="absolute inset-0 rounded-full bg-lilac" />
          {communityPhotos.map((photo) => (
            <Image
              key={photo.id}
              src={photo.src}
              alt=""
              sizes={photoSizes(photo.src.width)}
              className="absolute h-auto"
              style={{
                left: toPercent(photo.x),
                top: toPercent(photo.y),
                width: toPercent(photo.src.width / 2),
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
