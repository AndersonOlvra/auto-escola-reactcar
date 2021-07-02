import React from "react";
import { render } from "@testing-library/react";

import Hero from "./Hero";

test("renders Hero with children", () => {
  const { getByText } = render(
    <Hero>
      <p>React Car</p>
    </Hero>
  );

  expect(getByText("React Car")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";

  const { getByTestId } = render(<Hero image={image} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
