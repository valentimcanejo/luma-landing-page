import { ChatIcon } from "@/components/icons/ChatIcon";
import { ClockIcon } from "@/components/icons/ClockIcon";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "./ContactForm";

const infoCard =
  "flex h-20.5 items-center gap-4 rounded-xl bg-cream px-4 lg:h-23 lg:px-5";
const infoIcon =
  "flex size-10 shrink-0 items-center justify-center rounded-lg bg-lilac text-blue";

/** Server component: only the form below is a client component */
export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" tone="white">
      {/* Two columns from 1280px (480 / 540 in Figma), stacked below */}
      <div className="grid gap-10 xl:grid-cols-[480px_540px] xl:items-center xl:justify-between">
        <div>
          <SectionHeader
            id="contact-title"
            eyebrow="Contact"
            title="Get in touch"
            description="Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you."
            descriptionClassName="max-w-120"
          />

          <ul className="mt-8.5 grid gap-4 lg:mt-10.5">
            <li className={infoCard}>
              <span className={infoIcon}>
                <ChatIcon />
              </span>
              <div className="text-sm">
                <p className="leading-6 text-navy">Email</p>
                <a
                  href="mailto:contact@luma.com"
                  className="mt-0.5 block leading-6 text-blue hover:underline lg:mt-1"
                >
                  contact@luma.com
                </a>
              </div>
            </li>
            <li className={infoCard}>
              <span className={infoIcon}>
                <ClockIcon />
              </span>
              <div className="text-sm">
                <p className="leading-6 text-navy">Response Time</p>
                <p className="mt-0.5 leading-6 text-muted lg:mt-1">
                  Up to 24 hours on business days
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-white px-5 py-6 shadow-card lg:p-10">
          {/* type-h5 has a 32px line height on desktop, Figma uses 28px here:
              the smaller desktop gap keeps the fields in place */}
          <h3 className="type-h5 text-navy">Contact us</h3>
          <p className="mt-2.5 type-body text-muted lg:mt-1.5">
            Fill out the fields and we will get in touch.
          </p>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
