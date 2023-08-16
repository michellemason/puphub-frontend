import React from "react";
import { render } from "@testing-library/react";
import DogDetail from "./DogDetail";
import { MemoryRouter, Route } from "react-router-dom";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
          <DogDetail />
      </MemoryRouter>,
  );
});

