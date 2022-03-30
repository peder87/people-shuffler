import { render, screen } from "@testing-library/react";
import React, { ReactElement } from "react";
import { Upload } from "./upload";

describe('testing upload', () => {

  const setup = (ui:ReactElement) => {
    render(ui)
    return screen.getByTestId('upload')
  }

  it('should render correctly', () => {
    const btn = setup(<Upload />)
    expect(btn).toBeInTheDocument()
  });
});