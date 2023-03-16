import * as React from "react";
import { render, screen } from "@testing-library/react";

import Hello from "./Hello";

describe("Hello", () => {
  it("renders Hello component", () => {
    render(<Hello />);

    // screen.debug();
  });
});
