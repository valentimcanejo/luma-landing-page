"use client";

import { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  contactFields,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "@/lib/validateContact";

const emptyValues: ContactValues = { name: "", email: "", message: "" };

// 16px text on mobile: iOS Safari zooms into inputs with a smaller font size
const controlClasses =
  "w-full rounded-lg border border-line bg-cream px-4 text-base text-navy placeholder:text-muted sm:text-sm aria-invalid:border-danger";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  /** mt of the field: 26px after the card intro, 19px between fields */
  className?: string;
  children: React.ReactNode;
};

function Field({ id, label, error, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block type-label text-navy">
        {label}
      </label>
      <div className="mt-2.75">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Client-side only: there is no backend in scope, so a valid submission
 * resets the form and shows a confirmation.
 * - noValidate: we show our own messages instead of the browser bubbles,
 *   which are inconsistent between browsers and not stylable.
 * - Errors appear on submit. After that, a field is re-validated while the
 *   user types, so its message disappears as soon as it is fixed.
 * - On a failed submit, focus moves to the first invalid field.
 * - The confirmation is in a role="status" region that is always rendered,
 *   so screen readers announce it when its text changes.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState("");
  const baseId = useId();
  const fieldRefs = useRef<
    Partial<Record<ContactField, HTMLInputElement | HTMLTextAreaElement>>
  >({});

  const idFor = (field: ContactField) => `${baseId}-${field}`;

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = event.target.name as ContactField;
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    setStatus("");
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: validateContact(next)[field],
      }));
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    const firstInvalid = contactFields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    const firstName = values.name.trim().split(/\s+/)[0];
    setValues(emptyValues);
    setStatus(
      `Thanks, ${firstName}! Your message was sent. We will reply within 24 hours on business days.`,
    );
  }

  // Shared accessibility props for each control
  const a11y = (field: ContactField) => ({
    id: idFor(field),
    name: field,
    required: true,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${idFor(field)}-error` : undefined,
    value: values[field],
    onChange: handleChange,
  });

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Field
        id={idFor("name")}
        label="Full name"
        error={errors.name}
        className="mt-6.5"
      >
        <input
          {...a11y("name")}
          ref={(el) => {
            if (el) fieldRefs.current.name = el;
          }}
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={cn(controlClasses, "h-12.5")}
        />
      </Field>

      <Field
        id={idFor("email")}
        label="Email"
        error={errors.email}
        className="mt-4.75"
      >
        <input
          {...a11y("email")}
          ref={(el) => {
            if (el) fieldRefs.current.email = el;
          }}
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="youremail@example.com"
          className={cn(controlClasses, "h-12.5")}
        />
      </Field>

      <Field
        id={idFor("message")}
        label="Your question"
        error={errors.message}
        className="mt-4.75"
      >
        <textarea
          {...a11y("message")}
          ref={(el) => {
            if (el) fieldRefs.current.message = el;
          }}
          placeholder="Tell us how we can help..."
          className={cn(
            controlClasses,
            "block h-25.5 resize-y py-3.5 lg:h-30.5",
          )}
        />
      </Field>

      <Button type="submit" className="mt-5.75 w-full">
        Send message
      </Button>

      <p role="status" className={cn("text-sm text-navy", status && "mt-4")}>
        {status}
      </p>
    </form>
  );
}
