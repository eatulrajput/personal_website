import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import GitTutorialPage from "@/app/docs/git/page";

describe("GitTutorialPage Router Route", () => {
  beforeEach(() => {
    // Mock navigator.clipboard.writeText
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
      writable: true,
      configurable: true,
    });
  });

  it("renders headers and about instructions", () => {
    render(<GitTutorialPage />);
    expect(screen.getByText("MANUAL // CORE PROTOCOLS")).toBeInTheDocument();
    expect(
      screen.getByText("Git & GitHub Command Directory"),
    ).toBeInTheDocument();
  });

  it("renders individual command items", () => {
    render(<GitTutorialPage />);
    expect(screen.getByText("Check Git Version")).toBeInTheDocument();
    expect(screen.getByText("git --version")).toBeInTheDocument();
  });

  it("handles copy clicks correctly", async () => {
    jest.useFakeTimers();
    render(<GitTutorialPage />);

    // Target the first Copy button
    const copyBtns = screen.getAllByRole("button", { name: "Copy" });
    expect(copyBtns.length).toBeGreaterThan(0);

    // Click the first copy button
    fireEvent.click(copyBtns[0]);

    // Check clipboard writeText was called
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("git --version");

    // Button should display Copied!
    expect(screen.getByRole("button", { name: "Copied!" })).toBeInTheDocument();

    // Fast-forward 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // Button should reset back to Copy
    expect(
      screen.queryByRole("button", { name: "Copied!" }),
    ).not.toBeInTheDocument();

    jest.useRealTimers();
  });
});
