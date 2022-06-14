import { act, render, getAllByTestId } from "@testing-library/react";
import Home from "./Home";

let container = null;

beforeEach(async () => {
  container = render(<Home />).container;

  await act(async () => {});
});

it("should show homes", () => {
  console.log("before grabbing home");
  const homes = getAllByTestId(container, "home");

  console.log(container.innetHTML);

  expect(homes.length).toBeGreaterThan(0);
});
