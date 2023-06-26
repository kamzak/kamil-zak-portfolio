import { render, screen } from "@testing-library/react";
import "intersection-observer";
import Certificates from "./Certificates";

describe("Certificates component", () => {
  test("renders section heading", () => {
    render(<Certificates />);
    const headingElement = screen.getByText('Certificates.');
    expect(headingElement).toBeInTheDocument();
  });

  test("renders certificate cards", () => {
    render(<Certificates />);
    const certificateElements = screen.getAllByRole("button", {
      name: /Show credential/i,
    });
    expect(certificateElements).toHaveLength(3);
  });
});
