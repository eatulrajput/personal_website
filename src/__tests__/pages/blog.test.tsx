import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPage from "@/app/blog/page";

describe("BlogPage Router Route", () => {
  it("renders opinion headings and sections", () => {
    render(<BlogPage />);
    expect(screen.getByText("OPINION & IDEAS")).toBeInTheDocument();
    expect(screen.getByText("Blogs & Reports")).toBeInTheDocument();
  });

  it("renders dynamic 3D spline canvas element", () => {
    render(<BlogPage />);
    // Verify mocked canvas displays
    expect(screen.getByTestId("mock-spline")).toBeInTheDocument();
  });
});
