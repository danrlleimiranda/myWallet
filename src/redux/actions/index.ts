// Coloque aqui suas actions
export const LOGGED_USER = 'LOGGED_USER';

export const userAction = (payload: string) => ({
  type: LOGGED_USER,
  payload,
});
