import * as constants from "./Constants";

export const setBalance = balance => {
  return {
    type: constants.SET_BALANCE,
    balance
  };
};

export const deposite = balance => {
  return {
    type: constants.DEPOSITE,
    balance
  };
};

export const withdraw = balance => {
  return {
    type: constants.WITHDRAW,
    balance
  };
};
