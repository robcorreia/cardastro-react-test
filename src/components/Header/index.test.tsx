import { Header } from "./index";
import { render, screen } from "@testing-library/react";
//simula um browserRouter pois o bottáo cadastrar é um Link do react-router-dom
import { MemoryRouter } from "react-router-dom";

it('should have a "Cadastrar" button', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  let button = screen.getByText("Cadastrar");
  expect(button).toBeInTheDocument();
});

export {};
