import { Dispatch } from 'redux';
import fetchData from '../../services/fetchAPI';
import { ExchangeRatesType, ExpensesType } from '../../types';

export const LOGGED_USER = 'LOGGED_USER';
export const FETCH_STARTED = 'FETCH_STARTED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

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

const fetchError = (payload: any) => ({
  type: FETCH_ERROR,
  payload,
});

export const deleteExpense = (payload: ExpensesType[], id: number) => ({
  type: DELETE_EXPENSE,
  payload,
  id,
});

export const fetchAPI = (formData:any) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchStarted);
      const data = await fetchData();
      delete data.USDT;
      dispatch(fetchSuccess(data, formData));
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};
