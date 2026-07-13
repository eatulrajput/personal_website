import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("NotFound Component Router Route", () => {
  it("renders 404 error bulletin codes and headers", () => {
    render(<NotFound />);
    expect(screen.getByText("SYSTEM ERROR // 404")).toBeInTheDocument();
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(
      screen.getByText("BULLETIN: Resource Not Found"),
    ).toBeInTheDocument();
  });

  it("renders redirection button back to edition index", () => {
    render(<NotFound />);
    const link = screen.getByRole("link", { name: "← BACK TO EDITION INDEX" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
