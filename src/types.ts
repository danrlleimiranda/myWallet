import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type GlobalStateType = {
  user: {
    email: string
  },
  wallet: {
    currencies: string[];
    expenses: ExpensesType[];
    editor: boolean;
    idToEdit: number;
    allExpenses: number;
  };
};

export type InitialStateWalletType = {
  currencies: string[],
  expenses: ExpensesType[], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: boolean,
  idToEdit: number
  allExpenses: number
};

export type ExpensesType = {
  id: number;
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRates:{
    [key: string]: ExchangeRatesType; // Permite indexar com qualquer string
  };
};

export type ExchangeRatesType = {
  code: string,
  codein: string,
  name: string,
  high: string,
  low: string,
  varBid: string,
  pctChange: string,
  bid: string,
  ask: string,
  timestamp: string,
  create_date: string
};

export type Dispatch = ThunkDispatch<GlobalStateType, null, AnyAction>;
