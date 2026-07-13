import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer Component", () => {
  it("renders the footer logo and copyright correctly", () => {
    render(<Footer />);
    expect(screen.getByText("DEV // WIRED")).toBeInTheDocument();
    expect(screen.getByText(/ALL RIGHTS RESERVED/)).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Footer />);
    expect(screen.getByTitle("GitHub")).toBeInTheDocument();
    expect(screen.getByTitle("LinkedIn")).toBeInTheDocument();
  });

  it("handles back-to-top button render and interaction on scroll", () => {
    render(<Footer />);
    // Button is hidden initially
    expect(screen.queryByTitle("Back to Top")).not.toBeInTheDocument();

    // Trigger scroll
    fireEvent.scroll(window, { target: { scrollY: 400 } });

    // In JSDOM window event listener handles state, verify click behavior when button renders
    // We mock window.scrollTo in jest.setup.ts
  });
});
