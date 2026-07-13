import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage Router Core", () => {
  it("renders all sections on the home landing page", () => {
    const { container } = render(<HomePage />);

    // Check main sections exist by ID
    expect(container.querySelector("#hero")).toBeInTheDocument();
    expect(container.querySelector("#about")).toBeInTheDocument();
    expect(container.querySelector("#skills")).toBeInTheDocument();
    expect(container.querySelector("#education")).toBeInTheDocument();
    expect(container.querySelector("#experience")).toBeInTheDocument();
    expect(container.querySelector("#projects")).toBeInTheDocument();
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });
});
