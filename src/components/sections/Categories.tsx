import { CategoryCard } from "@/components/ui/CategoryCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { categories } from "@/data/categories";

export function Categories() {
  return (
    <Section id="categories" labelledBy="categories-title" tone="white">
      <SectionHeader
        id="categories-title"
        eyebrow="Find your next skill"
        title="Learn something worth knowing."
        description="Short, practical courses designed around skills you can put to work immediately."
        // 560px reproduces the Figma line breaks of the title and description
        className="max-w-140"
      />

      {/* 1 column on mobile, 2 from 640px, 4 only from 1280px: at 1024px four
          cards would be ~200px wide and the descriptions would wrap in 5 lines */}
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5 xl:grid-cols-4">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </ul>
    </Section>
  );
}
