import Image from "next/image";
import alexMorgan from "@/assets/images/testimonial-alex-morgan.webp";
import { QuoteIcon } from "@/components/icons/QuoteIcon";
import { Section } from "@/components/ui/Section";
import { stats } from "@/data/stats";

/**
 * The design has no visible title here, so the section gets a visually
 * hidden h2: screen reader users still find it in the headings list.
 */
export function Testimonial() {
  return (
    <Section id="testimonial" labelledBy="testimonial-title" tone="white">
      <h2 id="testimonial-title" className="sr-only">
        What learners say
      </h2>

      {/* From 1024px: quote on the left, stats in a 386px column on the right */}
      <div className="grid gap-15 lg:grid-cols-[1fr_386px] lg:items-center lg:gap-0">
        <figure>
          <QuoteIcon className="text-blue" />
          {/* 600px reproduces the Figma line breaks */}
          <blockquote className="mt-3.5 max-w-150 type-quote text-navy">
            <p>
              The lessons are short enough to fit into my week, but detailed
              enough that I actually leave with something I can use.
            </p>
          </blockquote>
          <figcaption className="mt-8.75 flex items-center gap-4">
            {/* Decorative: the name is right next to it */}
            <Image
              src={alexMorgan}
              alt=""
              sizes="48px"
              className="size-12 rounded-full bg-lilac"
            />
            <span>
              {/* TODO(figma): confirm author name weight (bold estimated from the render) */}
              <span className="block text-base leading-6 font-bold text-navy">
                Alex Morgan
              </span>
              <span className="mt-1 block text-sm leading-5 text-muted">
                Product Manager
              </span>
            </span>
          </figcaption>
        </figure>

        {/* Three equal columns on mobile, a column with a 2px divider on desktop */}
        <ul className="grid grid-cols-3 lg:grid-cols-1 lg:gap-4.5 lg:border-l-2 lg:border-line lg:pl-12">
          {stats.map((stat) => (
            <li key={stat.label}>
              {/* Same font, sizes and tracking as H1, with a tighter line height */}
              <p className="font-display text-[2.5rem] leading-none font-extrabold tracking-[-0.0625rem] text-blue lg:text-[4rem] lg:tracking-[-0.1rem]">
                {stat.value}
              </p>
              {/* 14px label: 24px line height on mobile (two lines), 20px on desktop as in Figma */}
              <p className="mt-2 text-sm leading-6 text-subtle lg:mt-3.25 lg:leading-5">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
