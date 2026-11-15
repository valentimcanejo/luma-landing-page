import Image from "next/image";
import Link from "next/link";
import featuredImage from "@/assets/images/featured-course.webp";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const courseDetails = ["8 lessons", "2h 40min", "Intermediate"];

export function FeaturedCourse() {
  return (
    <Section id="featured" labelledBy="featured-title" tone="blue">
      {/* Two columns from 1024px with the Figma proportions (538 / 522) */}
      <div className="grid gap-9 lg:grid-cols-[538fr_522fr] lg:items-center lg:gap-15">
        {/* The badge sits outside the rounded, clipped box so it can overflow it by 12px */}
        <div className="relative">
          <div className="aspect-[362/280] overflow-hidden rounded-2xl lg:aspect-[538/408]">
            <Image
              src={featuredImage}
              alt="Designer sketching at a desk covered with product prototypes, material samples and paper notes"
              placeholder="blur"
              sizes="(min-width: 1280px) 538px, (min-width: 1024px) 50vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)"
              className="size-full object-cover"
            />
          </div>
          <Badge tone="yellow" className="absolute -top-3 -left-3 h-7 px-3">
            Featured course
          </Badge>
        </div>

        <div>
          <SectionHeader
            id="featured-title"
            tone="light"
            eyebrow="Most popular this month"
            title="Designing products people understand."
          />
          {/* Not the SectionHeader description: this one uses the smaller
              subtitle-2 style and a 22px gap in Figma */}
          <p className="mt-5.5 type-subtitle-2 text-white">
            Learn how to turn complex workflows into simple, intentional product
            experiences through research, structure and thoughtful interaction
            design.
          </p>
          <p className="mt-6 type-subtitle-2 text-white">
            with Maya Chen · Senior Product Designer
          </p>

          <ul
            aria-label="Course details"
            className="mt-6 flex flex-wrap gap-2.5"
          >
            {courseDetails.map((detail) => (
              <li key={detail}>
                <Badge tone="outline-light" size="lg">
                  {detail}
                </Badge>
              </li>
            ))}
          </ul>

          {/* Stacked with a full-width button on mobile, inline from 640px */}
          <div className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row sm:gap-7">
            {/* No course page in scope: the call to action leads to the contact form */}
            <Button
              href="#contact"
              variant="accent"
              className="w-full sm:w-auto"
            >
              View course
            </Button>
            {/* 44px tall: comfortable touch target, as in the Figma mobile frame */}
            <Link
              href="#categories"
              className="group inline-flex h-11 items-center gap-3 type-label text-white hover:text-yellow"
            >
              Browse all courses
              <ArrowRightIcon className="transition-transform motion-safe:group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
