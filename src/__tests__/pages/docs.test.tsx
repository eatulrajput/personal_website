import React from "react";
import { render, screen } from "@testing-library/react";
import DocsPage from "@/app/docs/page";

describe("DocsPage Router Route", () => {
  it("renders manual instructions and blueprint illustrations", () => {
    render(<DocsPage />);
    expect(
      screen.getByText("TECHNICAL REFERENCE & DOCUMENTATION"),
    ).toBeInTheDocument();
    expect(screen.getByText("The Engineering Manual")).toBeInTheDocument();
  });

  it("renders reference manuals cards list links", () => {
    render(<DocsPage />);
    expect(screen.getByText("Git Tutorial")).toBeInTheDocument();
    expect(screen.getByText("READ MANUAL →")).toBeInTheDocument();
  });
});
