import { render, screen } from "@testing-library/react";
import "intersection-observer";
import About from "./About";

describe("About component", () => {
  test("renders introduction text", () => {
    render(<About />);
    const introductionText = screen.getByText("Introduction");
    expect(introductionText).toBeInTheDocument();
  });

  test("renders overview text", () => {
    render(<About />);
    const overviewText = screen.getByText("Overview.");
    expect(overviewText).toBeInTheDocument();
  });

  test("renders service cards", () => {
    render(<About />);
    const serviceCards = screen.getAllByRole("img");
    expect(serviceCards).toHaveLength(3);
  });
});