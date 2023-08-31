// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { AnyAction } from 'redux';
import fetchData from '../../services/fetchAPI';
import { FETCH_SUCCESS } from '../actions';
import { InitialStateWalletType } from '../../types';

const data = await fetchData();
delete data.USDT;
const currencies = Object.keys(data);

const INITIAL_STATE: InitialStateWalletType = {
  currencies, // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
  total: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload, formData }: AnyAction) => {
  switch (type) {
    case FETCH_SUCCESS:
      return { ...state,
        expenses: [...state.expenses,
          { id: state.expenses.length,
            ...formData,
            exchangeRates: payload,
          },
        ],
        total: state.total + Number((Number(payload[formData.currency].ask)
            * Number(formData.value)).toFixed(2)),
      };
    default:
      return state;
  }
};

export default wallet;
