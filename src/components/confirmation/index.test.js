import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Confirmation from ".";

describe("Confirmation component", () => {
  it("should render", () => {
    const { getByRole } = render(<Confirmation />);
    expect(getByRole("dialog")).toBeInTheDocument();
  });

  it('should have a title saying "Confirmation"', () => {
    const { getByText } = render(<Confirmation />);
    expect(getByText("Confirmation")).toBeInTheDocument();
  });

  it("should have a dynamic confirmation question", () => {
    const question = "Do you confirm?";
    const { getByText } = render(<Confirmation>{question}</Confirmation>);
    expect(getByText(question)).toBeInTheDocument();
  });

  it('should have an "OK" button', () => {
    const { getByRole } = render(<Confirmation />);
    expect(getByRole("button", { name: "OK" })).toBeInTheDocument();
  });

  it('should have a "Cancel" button', () => {
    const { getByRole } = render(<Confirmation />);
    expect(getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  it('should be able to receive a handler for the "OK" button and execute it upon click', () => {
    const onConfirmationHandler = jest.fn();
    const { getByRole } = render(
      <Confirmation onConfirmation={onConfirmationHandler} />
    );
    const okButton = getByRole("button", { name: "OK" });

    fireEvent.click(okButton);

    expect(onConfirmationHandler).toHaveBeenCalled();
  });

  it('should be able to receive a handler for the "Cancel" button and execute it upon click', () => {
    const onCancelHandler = jest.fn();
    const { getByRole } = render(<Confirmation onCancel={onCancelHandler} />);
    const cancelButton = getByRole("button", { name: "Cancel" });

    fireEvent.click(cancelButton);

    expect(onCancelHandler).toHaveBeenCalled();
  });
});
