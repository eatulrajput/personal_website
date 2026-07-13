import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar Component", () => {
  it("renders the centered DEV//WIRED branding logo", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("heading", { level: 1, name: /dev\s*\/\/\s*wired/i }),
    ).toBeInTheDocument();
  });

  it("renders all navigation items correctly", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Ideas")).toBeInTheDocument();
    expect(screen.getByText("Gear")).toBeInTheDocument();
    expect(screen.getByText("Science")).toBeInTheDocument();
    expect(screen.getByText("Business")).toBeInTheDocument();
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the theme switcher with Light, Dark, and Paper buttons", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: "LIGHT" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "DARK" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "PAPER" })).toBeInTheDocument();
  });

  it("updates local storage when theme buttons are clicked", () => {
    const setAttributeSpy = jest.spyOn(
      document.documentElement,
      "setAttribute",
    );
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

    render(<Navbar />);
    const lightButton = screen.getByRole("button", { name: "LIGHT" });
    fireEvent.click(lightButton);

    expect(setItemSpy).toHaveBeenCalledWith("theme", "light");
    expect(setAttributeSpy).toHaveBeenCalledWith("data-theme", "light");

    const paperButton = screen.getByRole("button", { name: "PAPER" });
    fireEvent.click(paperButton);

    expect(setItemSpy).toHaveBeenCalledWith("theme", "paper");
    expect(setAttributeSpy).toHaveBeenCalledWith("data-theme", "paper");

    setAttributeSpy.mockRestore();
    setItemSpy.mockRestore();
  });
});
