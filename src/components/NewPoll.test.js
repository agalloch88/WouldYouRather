import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import NewPoll from "./NewPoll";

describe("NewPoll", () => {
  it("should render the component", () => {
    const { component } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("should display all elements", () => {
    const { component } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );

    const firstOptionLabelElement = component.screen.getByTestId("firstChoiceLabel");
    const firstOptionInputElement = component.screen.getByTestId("firstChoice");
    const secondOptionLabelElement = component.screen.getByTestId("secondChoiceLabel");
    const secondOptionInputElement = component.screen.getByTestId("secondChoice");
    const submitButtonElement = component.screen.getByTestId("submit");

    expect(firstOptionLabelElement.textContent).toBe("First Choice");
    expect(secondOptionLabelElement.textContent).toBe("Second Choice");
    expect(submitButtonElement.textContent).toBe("Submit");

    fireEvent.change(firstOptionInputElement, { target: { value: "Texas" } });
    fireEvent.change(secondOptionInputElement, {
      target: { value: "North Carolina" },
    });
    expect(firstOptionInputElement.value).toBe("Texas");
    expect(secondOptionInputElement.value).toBe("North Carolina");
  });
});
