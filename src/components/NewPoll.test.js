import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import NewPoll from "./NewPoll";

describe("NewPoll", () => {
  it("should render the component", () => {
    const component = render(
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
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );

    const firstChoiceLabelElement = component.getByTestId("firstChoiceLabel");
    const firstChoiceInputElement = component.getByTestId("firstChoice");
    const secondChoiceLabelElement = component.getByTestId("secondChoiceLabel");
    const secondChoiceInputElement = component.getByTestId("secondChoice");
    const submitButtonElement = component.getByTestId("submit");

    expect(firstChoiceLabelElement.textContent).toBe("First Choice");
    expect(secondChoiceLabelElement.textContent).toBe("Second Choice");
    expect(submitButtonElement.textContent).toBe("Submit");

    fireEvent.change(firstChoiceInputElement, { target: { value: "Texas" } });
    fireEvent.change(secondChoiceInputElement, {
      target: { value: "North Carolina" },
    });
    expect(firstChoiceInputElement.value).toBe("Texas");
    expect(secondChoiceInputElement.value).toBe("North Carolina");
  });
});
