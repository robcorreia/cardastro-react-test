/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

// acessa o html e procura uma classe chamada container nele
it("should have a container div", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(container.getElementsByClassName("container").length).toBeGreaterThan(
    0
  );
});

it("should render NotFound component when entering a non existing route", () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/blablabla"]}>
      <App />
    </MemoryRouter>
  );
  const h2 = container.getElementsByTagName("h2")[0];
  expect(h2.innerHTML).toBe("Página não encontrada");
});

it("should go to the registration page when clicking on the registrer button", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  act(() => {
    let registerButton = container
      .getElementsByClassName("headerRight")[0]
      .getElementsByTagName("a")[0];
    registerButton.click();
  });

  const registrationTitle = screen.getByText("Cadastro de carro");
  expect(registrationTitle).toBeInTheDocument();
});

export {};
