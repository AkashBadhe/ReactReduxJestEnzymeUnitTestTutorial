import balanceReducer from "./balance";
import balanceReducer2 from "./balance";
import * as constants from "../Actions/Constants";

describe("balanceReducer", () => {
  const balance = 10;
  describe("When initializing reducer", () => {
    it("Should set the balance", () => {
      expect(
        balanceReducer(undefined, {
          type: constants.SET_BALANCE,
          balance
        })
      ).toEqual(balance);
    });

    it("then re-initialize", () => {
      expect(
        balanceReducer2(undefined, {
          type: constants.SET_BALANCE,
          balance
        })
      ).toEqual(balance);
    });
  });

  it("should deposite the balance", () => {
    expect(
      balanceReducer(10, {
        type: constants.DEPOSITE,
        balance
      })
    ).toEqual(20);
  });

  it("Shoud widrow the balance", () => {
    expect(
      balanceReducer(10, {
        type: constants.WITHDRAW,
        balance
      })
    ).toEqual(0);
  });
});
