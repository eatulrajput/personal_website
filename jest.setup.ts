import React from "react";
import "@testing-library/jest-dom";

// Mock window.scrollTo since JSDOM doesn't implement it
window.scrollTo = jest.fn();

// Mock IntersectionObserver which is missing in JSDOM
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit,
  ) {}

  observe = jest.fn((element: Element) => {
    // Optionally trigger callback immediately for testing active items
    const entry: IntersectionObserverEntry = {
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRatio: 1,
      intersectionRect: {} as DOMRectReadOnly,
      isIntersecting: true,
      rootBounds: null,
      target: element,
      time: Date.now(),
    };
    // Call the callback asynchronously or synchronously if needed in tests
  });

  unobserve = jest.fn();
  disconnect = jest.fn();
  takeRecords = jest.fn(() => []);
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock next/navigation routers
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
  }),
}));

// Mock @splinetool/react-spline since it renders WebGL Canvas which JSDOM cannot compile
jest.mock(
  "@splinetool/react-spline",
  () => {
    return function MockSpline() {
      return React.createElement(
        "div",
        { "data-testid": "mock-spline" },
        "Spline Canvas",
      );
    };
  },
  { virtual: true },
);
