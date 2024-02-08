// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import { DELETE_EXPENSE, EDITING_EXPENSE, EDITION_CONCLUDED,
  FETCH_SUCCESS,
  UPDATE_CURRENCIES } from '../actions';
import { ExpensesType, InitialStateWalletType } from '../../types';

// const data = await fetchData();
// delete data.USDT;
// const currencies = Object.keys(data);

const INITIAL_STATE: InitialStateWalletType = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
  allExpenses: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload, formData, id }: AnyAction) => {
  switch (type) {
    case FETCH_SUCCESS:
      return { ...state,
        expenses: [...state.expenses,
          { id: state.expenses.length,
            ...formData,
            exchangeRates: payload,
          }],
        allExpenses: (Number(state.allExpenses)
        + Number((Number(payload[formData.currency].ask)
            * Number(formData.value)))).toFixed(2),
      };
    case UPDATE_CURRENCIES: return { ...state, currencies: payload };
    case DELETE_EXPENSE: {
      const updatedExpenses = payload.length !== 0 ? payload
        .filter((expense: ExpensesType) => expense.id !== id) : [];
      const total = updatedExpenses.length > 0 ? updatedExpenses
        .map((expense: ExpensesType) => Number(expense.value)
    * Number(expense.exchangeRates[expense.currency].ask))
        .reduce((acc: number, curr: number) => acc + curr) : 0;
      return { ...state,
        expenses: updatedExpenses,
        allExpenses: Number(total).toFixed(2) };
    }
    case EDITING_EXPENSE:
      return {
        ...state,
        idToEdit: payload,
        editor: true,
      };
    case EDITION_CONCLUDED: {
      const { expenses } = state;
      const notEditedExpense = expenses.length > 0 ? expenses
        .filter((expense) => expense.id !== state.idToEdit) : expenses;
      return { ...state,
        editor: false,
        expenses: [...notEditedExpense,
          { id: state.idToEdit, ...formData, exchangeRates: payload }]
          .sort((a, b) => a.id - b.id),
        allExpenses: [...notEditedExpense,
          { id: state.idToEdit, ...formData, exchangeRates: payload }]
          .sort((a, b) => a.id - b.id)
          .map((expense) => Number(expense.value)
    * Number(expense.exchangeRates[expense.currency].ask))
          .reduce((acc, curr) => acc + curr).toFixed(2),
      };
    }
    default:
      return state;
  }
};

export default wallet;
