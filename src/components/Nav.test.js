import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import { setAuthedUser } from "../actions/authedUser";

describe("Nav", () => {
  it("should render the component", () => {
    store.dispatch(setAuthedUser({ id: "sarahedo", password: "" }));

    const { component } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });

  it("should display username of logged in user", () => {
    store.dispatch(setAuthedUser({ id: "sarahedo", password: "" }));

    const { component } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    const userSpanElement = component.screen.getByTestId("user");
    expect(userSpanElement.textContent).toBe("Current Signed In as: sarahedo");
  });
});