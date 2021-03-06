import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);
  it("Should render App component", () => {
    expect(app).toMatchSnapshot();
  });

  it("Should have the connected Wallet component", () => {
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });
});
