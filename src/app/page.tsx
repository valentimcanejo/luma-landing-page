import { Header } from "@/components/layout/Header";
import { Categories } from "@/components/sections/Categories";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";

// Temporary placeholders so the header and in-page anchors can be tested.
// Each one is replaced by the real section in the next steps.
const placeholders = [
  { id: "how-it-works", title: "How it works", tone: "cream" },
  { id: "community", title: "Community", tone: "white" },
  { id: "contact", title: "Contact", tone: "cream" },
] as const;

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedCourse />
        {placeholders.map(({ id, title, tone }) => (
          <Section
            key={id}
            id={id}
            labelledBy={`${id}-title`}
            tone={tone}
            className="min-h-[70vh]"
          >
            <h2 id={`${id}-title`} className="type-h3">
              {title}
            </h2>
          </Section>
        ))}
      </main>
    </>
  );
}
