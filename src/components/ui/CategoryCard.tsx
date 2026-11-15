import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import type { Category } from "@/data/types";
import { Badge } from "./Badge";

type CategoryCardProps = {
  category: Category;
  /** Position in the list, shown as 01, 02... */
  index: number;
};

/**
 * Rendered as a list item: the parent <ul> tells screen readers how many
 * categories there are, so the visual number is hidden from them.
 * Padding is 2px larger vertically than horizontally, as measured in Figma.
 */
export function CategoryCard({ category, index }: CategoryCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="flex flex-col rounded-2xl border border-line bg-white px-6 py-6.5 lg:px-7 lg:py-7.5">
      <Badge tone="lilac" aria-hidden="true" className="self-start">
        {number}
      </Badge>
      <h3 className="mt-4.5 type-h5 text-navy">{category.title}</h3>
      <p className="mt-3 type-body text-subtle">{category.description}</p>

      {/* mt-auto keeps every link on the same line when cards share a row */}
      {/* flex: an inline-flex link in a block would add line-height space below it */}
      <div className="mt-auto flex pt-6">
        <Link
          href={category.href}
          className="group inline-flex items-center gap-3 type-label text-navy hover:text-blue"
        >
          Explore
          <span className="sr-only"> {category.title} courses</span>
          <ArrowRightIcon className="transition-transform motion-safe:group-hover:translate-x-0.5" />
        </Link>
      </div>
    </li>
  );
}
