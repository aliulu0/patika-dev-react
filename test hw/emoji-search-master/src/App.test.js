import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header.js";
import App from "./App.js";

describe("Emoji search tests", () => {
  let header,input,items;
  beforeEach(() => {
    render(<App/>, <Header />)
    header = screen.getByText("Emoji Search");
    input = screen.getByPlaceholderText("Search for emoji");
    items = screen.getAllByText(/Click to copy emoji/i);
  });

  test("header tests", () => {
    expect(header).toBeInTheDocument();
  });
  test("Emoji list test ", () => {

    expect(screen.getByText("Smile")).toBeInTheDocument();
    expect(items.length).toEqual(20);
  });
  test("filter test", () => {
   
    userEvent.type(input, "Blus");
    const item = screen.getByText("Blush");
    expect(item).toBeInTheDocument();
  });
  test("Emoji copy test ", () => {
    const clicks = screen.getAllByTestId("row");
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
  });
});
