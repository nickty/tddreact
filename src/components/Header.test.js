import { render, getByTestId } from "@testing-library/react";
import Header from "./Header";

let container = null;

beforeEach(() => {
  container = render(<Header />).container;
});

it("should show the logo", () => {
  expect(getByTestId(container, "logo")).toBeTruthy();
});
it("should show the search", () => {
  expect(getByTestId(container, "search")).toBeTruthy();
});
it("should show the menu", () => {
  expect(getByTestId(container, "menu")).toBeTruthy();
});
it("should show the menu", () => {
  expect(getByTestId(container, "home-type")).toBeTruthy();
  expect(getByTestId(container, "dates")).toBeTruthy();
  expect(getByTestId(container, "guests")).toBeTruthy();
  expect(getByTestId(container, "price")).toBeTruthy();
  expect(getByTestId(container, "rooms")).toBeTruthy();
  expect(getByTestId(container, "amenities")).toBeTruthy();
});
