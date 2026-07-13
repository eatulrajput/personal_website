import React from "react";
import { render, screen } from "@testing-library/react";
import NestPage from "@/app/nest/page";

describe("NestPage Router Route", () => {
  it("renders personal space headings and categorizations", () => {
    render(<NestPage />);
    expect(screen.getByText("LIFE & CULTURE")).toBeInTheDocument();
    expect(screen.getByText("The Personal Space")).toBeInTheDocument();
  });

  it("renders inspiration quotes with author references", () => {
    render(<NestPage />);
    expect(screen.getByText(/Be water, my friend/)).toBeInTheDocument();
    expect(screen.getByText(/Albert Einstein/)).toBeInTheDocument();
  });

  it("renders Spotify section guidelines", () => {
    render(<NestPage />);
    expect(screen.getByText("The Spotify Pipeline")).toBeInTheDocument();
  });
});
