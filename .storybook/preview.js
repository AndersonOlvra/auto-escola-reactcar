import React from "react";
import { addDecorator, addParameters } from "@storybook/react";

import GlobalStyle from "../src/styles/GlobalStyle";

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));

const viewports = {
  extraSmall: {
    name: "Portrait phone (default)",
    styles: {
      width: "360",
      height: "640",
    },
  },
  small: {
    name: "Landscape phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },
  medium: {
    name: "Tablet (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  extraLarge: {
    name: "Large Desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};

addParameters({
  viewport: {
    viewports,
  },
});
