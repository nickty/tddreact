import { render, getAllByTestId } from "@testing-library/react";
import Home from "./Home";

let container = null;

beforeEach(() => {
  container = render(<Home />).container;
});

it("should show homes", () => {
  const homes = getAllByTestId(container, "home");

  expect(homes.length).toBeGreaterThan(0);
});
