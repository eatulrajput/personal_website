import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/home/Hero";

describe("Hero Component", () => {
  it("renders lead story tags and headers correctly", () => {
    render(<Hero />);
    expect(screen.getByText("LEAD STORY")).toBeInTheDocument();
    expect(
      screen.getByText("The Systems Architect Redefining Scalability and AI"),
    ).toBeInTheDocument();
  });

  it("renders download resume button", () => {
    render(<Hero />);
    expect(screen.getByText("Download Resume")).toBeInTheDocument();
    expect(screen.getByText("Connect on LinkedIn")).toBeInTheDocument();
  });

  it("renders diagram card caption", () => {
    render(<Hero />);
    expect(
      screen.getByText("Fig 1. Systems architecture mapping flowchart"),
    ).toBeInTheDocument();
  });
});
