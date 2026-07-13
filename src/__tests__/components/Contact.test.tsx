import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "@/components/home/Contact";

describe("Contact Component", () => {
  it("renders correspondence logs title and form instructions", () => {
    render(<Contact />);
    expect(
      screen.getByText("Section 06 // LETTERS TO THE EDITOR"),
    ).toBeInTheDocument();
    expect(screen.getByText("Write to the Engineer")).toBeInTheDocument();
  });

  it("handles form updates and mock transmission submissions", () => {
    render(<Contact />);

    const nameInput = screen.getByPlaceholderText("E.g. ALICE, CTO");
    const emailInput = screen.getByPlaceholderText("E.g. CTO@ENTERPRISE.COM");
    const messageInput = screen.getByPlaceholderText("Write your request...");
    const submitBtn = screen.getByRole("button", {
      name: /TRANSMIT COMMUNIQUE/,
    });

    // Enter values
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hello, this is a test message." },
    });

    expect(nameInput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("john@example.com");
    expect(messageInput).toHaveValue("Hello, this is a test message.");

    // Submit form
    fireEvent.click(submitBtn);

    // Verify confirmation renders
    expect(screen.getByText(/Transmission Received/)).toBeInTheDocument();
  });
});
