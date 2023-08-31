import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type GlobalStateType = {
  user: {
    email: string
  },
  wallet: {
    currencies: string[],
    expenses: ExpensesType[], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
    editor: boolean,
    idToEdit: number
    total: number
  }
};

export type InitialStateWalletType = {
  currencies: string[],
  expenses: ExpensesType[], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: boolean,
  idToEdit: number
  total: number
};

export type ExpensesType = {
  id: number;
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRates: object;
};

export type Dispatch = ThunkDispatch<GlobalStateType, null, AnyAction>;
