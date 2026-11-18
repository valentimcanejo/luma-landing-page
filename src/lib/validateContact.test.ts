import { describe, expect, it } from "vitest";
import {
  MESSAGE_MIN_LENGTH,
  validateContact,
  type ContactValues,
} from "./validateContact";

const valid: ContactValues = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  message: "How long does each course take?",
};

describe("validateContact", () => {
  it("returns no errors for valid values", () => {
    expect(validateContact(valid)).toEqual({});
  });

  it("requires every field", () => {
    const errors = validateContact({ name: "", email: "", message: "" });
    expect(Object.keys(errors)).toEqual(["name", "email", "message"]);
  });

  it("treats whitespace-only values as empty", () => {
    const errors = validateContact({ name: "  ", email: " ", message: "\n" });
    expect(errors.name).toBe("Please enter your name.");
    expect(errors.email).toBe("Please enter your email.");
    expect(errors.message).toBe("Please tell us how we can help.");
  });

  it.each(["ada", "ada@", "ada@example", "ada @example.com", "@example.com"])(
    "rejects the invalid email %j",
    (email) => {
      expect(validateContact({ ...valid, email }).email).toMatch(/valid email/);
    },
  );

  it("accepts an email with surrounding spaces", () => {
    expect(validateContact({ ...valid, email: " ada@example.com " })).toEqual(
      {},
    );
  });

  it("enforces the minimum message length after trimming", () => {
    const short = " ".repeat(5) + "a".repeat(MESSAGE_MIN_LENGTH - 1);
    expect(validateContact({ ...valid, message: short }).message).toBe(
      `Please write at least ${MESSAGE_MIN_LENGTH} characters.`,
    );
    expect(
      validateContact({ ...valid, message: "a".repeat(MESSAGE_MIN_LENGTH) }),
    ).toEqual({});
  });
});
