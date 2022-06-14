import { act, render, getAllByTestId } from "@testing-library/react";
import apiClient from "../services/apiClient";
import Home from "./Home";

let container = null;

beforeEach(async () => {
  jest.spyOn(apiClient, "getHomes").mockImplementation(() => {
    return Promise.resolve([
      {
        title: "Test one",
        image: "listing name",
        location: "lockaitn what is it",
        price: 1,
      },
    ]);
  });
  container = render(<Home />).container;

  await act(async () => {});
});

it("should show homes", () => {
  console.log("before grabbing home");
  const homes = getAllByTestId(container, "home");

  // console.log(container.innetHTML);

  expect(homes.length).toBeGreaterThan(0);
});
