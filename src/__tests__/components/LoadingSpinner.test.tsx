import React from "react";
import { render } from "@testing-library/react";
import LoadingSpinner from "@/components/LoadingSpinner";

describe("LoadingSpinner Component", () => {
  it("renders spinner when loading is true", () => {
    const { container } = render(<LoadingSpinner loading={true} />);
    // Verify outer spinning rings exist in DOM
    const outerRing = container.querySelector(".animate-spin");
    const innerRing = container.querySelector(
      ".animate-\\[spin_1\\.5s_linear_infinite_reverse\\]",
    );

    expect(outerRing).toBeInTheDocument();
    expect(innerRing).toBeInTheDocument();
  });

  it("does not render when loading is false", () => {
    const { container } = render(<LoadingSpinner loading={false} />);
    expect(container.firstChild).toBeNull();
  });
});
