import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./Login";
import { handleInitialData } from "../actions/shared";

describe("Login", () => {
  it("should render the component", () => {
    const { component } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("should clear input fields after submitting", async () => {
    await store.dispatch(handleInitialData());

    const { wrapper } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const loginHeadingElement = wrapper.screen.getByTestId("login-heading");
    const usernameInputElement = wrapper.screen.getByTestId("username");
    const passwordInputElement = wrapper.screen.getByTestId("password");
    const submitButtonElement = wrapper.screen.getByTestId("submit");
    expect(loginHeadingElement).toBeInTheDocument();
    expect(usernameInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();

    fireEvent.change(usernameInputElement, { target: { value: "sarahedo" } });
    fireEvent.change(passwordInputElement, {
      target: { value: "wrongpassword" },
    });
    expect(usernameInputElement.value).toBe("sarahedo");
    expect(passwordInputElement.value).toBe("wrongpassword");
    fireEvent.click(submitButtonElement); // User stays on page
    expect(loginHeadingElement).toBeInTheDocument();
    expect(usernameInputElement.value).toBe("");
    expect(passwordInputElement.value).toBe("");
  });
});
