import { ADD_EXPENSE, SET_DATE, UNSET_DATE } from "../actions/constants";

const initialState = {
  income: 0.0,
  expense: 0.0,
  lastTransactionDate: "",
  transactions: []
};

/*TODO: Model Design
  transactions:{
    name: String(Description),
    date: Date,
    amount: Number,
    type: String (Income,Expense),
    category: [String] ([food,meat,bill])
  }
*/

const reducer = (state = initialState, action) => {
  let { income = 0.0, expense = 0.0 } = state;
  if (typeof action.transaction != "undefined") {
    if (action.transaction.type === "Expense") {
      expense += parseFloat(action.transaction.amount);
    } else {
      income += parseFloat(action.transaction.amount);
    }
  }
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
        income,
        expense,
        lastTransactionDate: ""
      };
    case SET_DATE:
      return {
        ...state,
        lastTransactionDate: action.date
      };
    case UNSET_DATE:
      return {
        ...state,
        lastTransactionDate: ""
      };
    default:
      return state;
  }
};

export default reducer;
