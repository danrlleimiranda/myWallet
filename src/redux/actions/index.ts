import { Dispatch } from 'redux';
import fetchData from '../../utils/fetchAPI';
import { ExchangeRatesType, ExpensesType, GlobalStateType } from '../../types';

export const LOGGED_USER = 'LOGGED_USER';
export const FETCH_STARTED = 'FETCH_STARTED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDITING_EXPENSE = 'EDITING_EXPENSE';
export const EDITION_CONCLUDED = 'EDITION_CONCLUDED';
export const UPDATE_CURRENCIES = 'UPDATE_CURRENCIES';

export const userAction = (payload: string) => ({
  type: LOGGED_USER,
  payload,
});

const fetchStarted = {
  type: FETCH_STARTED,
};

type PayloadType = {
  [key: string]: ExchangeRatesType
};

type FormDataType = {
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
};

export const fetchSuccess = (payload: PayloadType, formData: FormDataType) => ({
  type: FETCH_SUCCESS,
  payload,
  formData,
});

export const updatedExpenses = (payload: string[]) => ({
  type: UPDATE_CURRENCIES,
  payload,
});

const fetchError = (payload: any) => ({
  type: FETCH_ERROR,
  payload,
});

export const deleteExpense = (payload: ExpensesType[], id: number) => ({
  type: DELETE_EXPENSE,
  payload,
  id,
});

export const editingExpense = (payload: number) => ({
  type: EDITING_EXPENSE,
  payload,
});

export const editionConcluded = (payload: PayloadType, formData: FormDataType) => ({
  type: EDITION_CONCLUDED,
  payload,
  formData,
});
type GetState = () => GlobalStateType;

export const fetchAPI = (formData?: FormDataType) => {
  return async (dispatch: Dispatch, getStore: GetState) => {
    try {
      dispatch(fetchStarted);
      const data = await fetchData();
      delete data.USDT;
      if (!formData) {
        dispatch(updatedExpenses(Object.keys(data)));
        return;
      }
      if (formData && getStore().wallet.editor) {
        dispatch(editionConcluded(data, formData));
        return;
      }
      if (formData && !getStore().wallet.editor) {
        dispatch(fetchSuccess(data, formData));
      }
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};
