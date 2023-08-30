export type GlobalStateType = {
  user: {
    email: string
  },
  wallet: {
    currencies: string[],
    expenses: ExpensesType[], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
    editor: boolean,
    idToEdit: number
  }
};

export type ExpensesType = {
  id: number;
  value: number;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeRates: string;
};
