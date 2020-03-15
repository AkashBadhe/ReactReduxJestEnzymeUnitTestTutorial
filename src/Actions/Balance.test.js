import * as constants from "./Constants";
import * as actions from "./Balance";

it("creates an action to set balance", () => {
  const balance = 0;
  const expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it("should create action to deposite balance", () => {
  const balance = 20;
  const expectedAction = { type: constants.DEPOSITE, balance };
  expect(actions.deposite(balance)).toEqual(expectedAction);
});

it("should create an action to withdraw", () => {
  const balance = 20;
  const expectedAction = { type: constants.WITHDRAW, balance };
  expect(actions.withdraw(balance)).toEqual(expectedAction);
});
