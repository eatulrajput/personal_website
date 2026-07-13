import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "@/components/home/Projects";

describe("Projects Component", () => {
  it("renders the section features log title", () => {
    render(<Projects />);
    expect(screen.getByText("Section 05 // FEATURES")).toBeInTheDocument();
  });

  it("renders the cover story featured project correctly", () => {
    render(<Projects />);
    expect(screen.getByText("COFFEE BOT INTEGRATION")).toBeInTheDocument();
    expect(screen.getByText(/COVER STORY/)).toBeInTheDocument();
  });

  it("renders non-featured projects in separate columns", () => {
    render(<Projects />);
    expect(screen.getByText("VISION ATTENDANCE RADAR")).toBeInTheDocument();
    expect(screen.getByText("TASKMASTER ENGINE")).toBeInTheDocument();
    expect(screen.getByText("OFFENSIVE LEXICON SHIELD")).toBeInTheDocument();
    expect(screen.getByText("FINFY LOAN ESTIMATOR")).toBeInTheDocument();
  });
});
