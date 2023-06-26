import { render, screen } from "@testing-library/react";
import "intersection-observer";

import About from "../About";

test("renders About section", () => {
  render(<About />);
  const headerText = screen.getByText(/Introduction/i);
  expect(headerText).toBeInTheDocument();

  const subHeaderText = screen.getByText(/Overview./i);
  expect(subHeaderText).toBeInTheDocument();
});

test("renders overview test", () => {
  render(<About />);
  const overviewText = screen.getByText(
    /I am a self-taught, passionate Frontend Developer who crafts functional, manageable, and beautiful web pages./i
  );
  expect(overviewText).toBeInTheDocument();
});
