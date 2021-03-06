/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CarList } from ".";

it("should have a list of cars", () => {
  const { container } = render(
    <MemoryRouter>
      <CarList />
    </MemoryRouter>
  );

  const listElement = container.getElementsByClassName("list");
  expect(listElement.length).toBeGreaterThan(0);
});

it("should have 5 cars in the list", () => {
  const { container } = render(
    <MemoryRouter>
      <CarList />
    </MemoryRouter>
  );

  const carsList = container.getElementsByClassName("carItem");
  expect(carsList.length).toBe(5);
});

export {};
