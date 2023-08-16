import React from "react";
import { render } from "@testing-library/react";
import DogList from "./DogList";

it("matches snapshot", function () {
  const { asFragment } = render(<DogList />);
  expect(asFragment()).toMatchSnapshot();
});
