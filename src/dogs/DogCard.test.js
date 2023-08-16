import React from "react";
import { render } from "@testing-library/react";
import DogCard from "./DogCard";
import { MemoryRouter } from "react-router";

it("matches snapshot with image", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <DogCard
            name="d1"
            breed="dog"
            age="1"
            image="https://pbs.twimg.com/profile_images/770491761412173826/ZUeIa4tw_400x400.jpg"
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without image", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <DogCard
            name="d1"
            breed="dog"
            age="1"
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
