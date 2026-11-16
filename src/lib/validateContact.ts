export type ContactValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactField = keyof ContactValues;

export type ContactErrors = Partial<Record<ContactField, string>>;

/** Field order in the form: the first invalid one receives focus */
export const contactFields: ContactField[] = ["name", "email", "message"];

// Deliberately simple: something@something.tld, no spaces.
// The real check is the confirmation email a backend would send.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MESSAGE_MIN_LENGTH = 10;

/**
 * Pure validation: no DOM, no React, so it is trivial to unit test.
 * Returns only the fields that have an error; an empty object means valid.
 */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  }

  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email, like name@example.com.";
  }

  if (!message) {
    errors.message = "Please tell us how we can help.";
  } else if (message.length < MESSAGE_MIN_LENGTH) {
    errors.message = `Please write at least ${MESSAGE_MIN_LENGTH} characters.`;
  }

  return errors;
}
