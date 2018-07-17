import { ADD_EXPENSE, SET_DATE } from "./constants";

export const addExpense = transaction => ({
  type: ADD_EXPENSE,
  transaction
});

export const setDate = date => ({
  type: SET_DATE,
  date
});
