import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import hero from "@/assets/images/hero.webp";

// Temporary token preview, replaced by the real sections in the next step.
const typeStyles = [
  "type-h1",
  "type-h2",
  "type-h3",
  "type-h4",
  "type-h5",
  "type-subtitle-1",
  "type-subtitle-2",
  "type-quote",
  "type-body",
  "type-overline",
  "type-label",
] as const;

const colors = [
  "bg-navy",
  "bg-blue",
  "bg-yellow",
  "bg-yellow-soft",
  "bg-cream",
  "bg-peach",
  "bg-lilac",
  "bg-gold",
  "bg-coral",
  "bg-coral/15",
  "bg-muted",
  "bg-subtle",
  "bg-faint",
  "bg-line",
  "bg-line-soft",
] as const;

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-page px-5 py-15 lg:px-20 lg:py-25">
      <Logo />
      <h1 className="mt-10 type-h1">
        Build skills that actually move you forward.
      </h1>

      <section aria-labelledby="type-title" className="mt-15 space-y-4">
        <h2 id="type-title" className="type-overline text-blue">
          Text styles
        </h2>
        {typeStyles.map((style) => (
          <p key={style} className={style}>
            {style}: Less browsing. More learning.
          </p>
        ))}
      </section>

      <section aria-labelledby="color-title" className="mt-15">
        <h2 id="color-title" className="type-overline text-blue">
          Colors
        </h2>
        <ul className="mt-4 grid grid-cols-3 gap-4 md:grid-cols-5">
          {colors.map((color) => (
            <li key={color} className="type-body text-muted">
              <span
                className={`block h-16 rounded-xl border border-line ${color}`}
              />
              {color}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="image-title" className="mt-15">
        <h2 id="image-title" className="type-overline text-blue">
          Static image import
        </h2>
        <Image
          src={hero}
          alt="Smiling woman with glasses taking an online lesson on her laptop, with a notebook on the desk"
          placeholder="blur"
          preload
          sizes="(min-width: 1024px) 500px, 100vw"
          className="mt-4 h-auto w-full max-w-[500px]"
        />
      </section>
    </main>
  );
}
