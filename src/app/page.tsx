import { Header } from "@/components/layout/Header";
import { Section } from "@/components/ui/Section";

// Temporary placeholders so the header anchors can be tested.
// Each one is replaced by the real section in the next steps.
const placeholders = [
  { id: "categories", title: "Categories", tone: "white" },
  { id: "how-it-works", title: "How it works", tone: "cream" },
  { id: "community", title: "Community", tone: "white" },
  { id: "contact", title: "Contact", tone: "cream" },
] as const;

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Section id="hero" labelledBy="hero-title" tone="cream">
          <h1 id="hero-title" className="type-h1">
            Build skills that actually move you forward.
          </h1>
        </Section>
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
