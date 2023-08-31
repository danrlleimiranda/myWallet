// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import fetchData from '../../services/fetchAPI';
import { DELETE_EXPENSE, FETCH_SUCCESS } from '../actions';
import { ExpensesType, InitialStateWalletType } from '../../types';

const data = await fetchData();
delete data.USDT;
const currencies = Object.keys(data);

const INITIAL_STATE: InitialStateWalletType = {
  currencies, // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
  allExpenses: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload, formData, id }: AnyAction) => {
  let updatedExpenses: ExpensesType[] = [];
  switch (type) {
    case FETCH_SUCCESS:
      return { ...state,
        expenses: [...state.expenses,
          { id: state.expenses.length,
            ...formData,
            exchangeRates: payload,
          },
        ],
        allExpenses: (Number(state.allExpenses)
        + Number((Number(payload[formData.currency].ask)
            * Number(formData.value)))).toFixed(2),
      };

    case DELETE_EXPENSE: {
      updatedExpenses = payload
        .filter((expense: ExpensesType) => expense.id !== id);
      const total = updatedExpenses.length > 0 ? updatedExpenses
        .map((expense) => Number(expense.value)
    * Number(expense.exchangeRates[expense.currency].ask))
        .reduce((acc, curr) => acc + curr) : 0;

      return { ...state,
        expenses: updatedExpenses,
        allExpenses: Number(total).toFixed(2),
      };
    }
    default:
      return state;
  }
};

export default wallet;
