import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import  App from "./App";
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

export {};
