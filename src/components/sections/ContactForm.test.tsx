import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "./ContactForm";

function setup() {
  const user = userEvent.setup();
  render(<ContactForm />);
  return {
    user,
    name: screen.getByLabelText("Full name"),
    email: screen.getByLabelText("Email"),
    message: screen.getByLabelText("Your question"),
    submit: screen.getByRole("button", { name: "Send message" }),
  };
}

describe("ContactForm", () => {
  it("shows linked errors and focuses the first invalid field", async () => {
    const { user, name, email, submit } = setup();

    await user.type(name, "Ada");
    await user.click(submit);

    // Name is valid, so focus skips it and lands on email
    expect(name).not.toHaveAttribute("aria-invalid");
    expect(email).toHaveFocus();
    expect(email).toHaveAttribute("aria-invalid", "true");
    expect(email).toHaveAccessibleDescription("Please enter your email.");
  });

  it("clears a field's error as soon as it is fixed", async () => {
    const { user, email, submit } = setup();

    await user.click(submit);
    await user.type(email, "ada@example");
    expect(email).toHaveAccessibleDescription(/valid email/);

    await user.type(email, ".com");
    expect(email).not.toHaveAttribute("aria-invalid");
    expect(email).not.toHaveAccessibleDescription();
  });

  it("announces success and resets the form on a valid submit", async () => {
    const { user, name, email, message, submit } = setup();

    await user.type(name, "Ada Lovelace");
    await user.type(email, "ada@example.com");
    await user.type(message, "How long does each course take?");
    await user.click(submit);

    expect(screen.getByRole("status")).toHaveTextContent(
      "Thanks, Ada! Your message was sent.",
    );
    expect(name).toHaveValue("");
    expect(email).toHaveValue("");
    expect(message).toHaveValue("");
  });
});
