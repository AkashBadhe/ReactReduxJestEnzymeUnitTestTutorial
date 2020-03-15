import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";

describe("Wallet", () => {
  const mockDeposite = jest.fn();
  const mockWithdrawl = jest.fn();
  const props = {
    balance: 20,
    deposite: mockDeposite,
    withdraw: mockWithdrawl
  };
  const wallet = shallow(<Wallet {...props} />);

  it("Should render", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("Should display the balance", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet Balance: 20");
  });

  it("should have the input field to Deposite/Withdraw balance", () => {
    expect(wallet.find(".input-amount").exists()).toBeTruthy();
  });

  it("should have button to withdraw", () => {
    expect(wallet.find(".btn-withdraw").exists()).toBeTruthy();
  });

  it("should have button to deposite", () => {
    expect(wallet.find(".btn-deposite").exists()).toBeTruthy();
  });

  describe("On balance input chaneg", () => {
    const balance = "33";
    const e = {
      target: {
        name: "balance",
        value: balance
      }
    };
    beforeEach(() => {
      wallet.find(".input-amount").simulate("change", e);
    });

    it("should update the balance in state", () => {
      expect(wallet.state().balance).toEqual(parseFloat(balance));
    });
      
    describe("When user whants to deposet by clikin on Deposite button", () => {
      beforeEach(() => {
        wallet.find(".btn-deposite").simulate("click");
      });

      it("Should call deposite handler function.", () => {
        expect(mockDeposite).toHaveBeenCalledWith(parseFloat(balance));
      });
    });

    describe("When user whants to withdraw by clikin on Withdraw button", () => {
      beforeEach(() => {
        wallet.find(".btn-withdraw").simulate("click");
      });

      it("Should call withdraw handler function.", () => {
        expect(mockDeposite).toHaveBeenCalledWith(parseFloat(balance));
      });
    });
  });
});
