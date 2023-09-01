import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../../redux/reducers';

function renderWithRouterAndRedux(
  component: JSX.Element,
  route: string = '/',
  state: any | undefined = undefined,
  store = createStore(rootReducer, state, applyMiddleware(thunk)),
) {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(
      <BrowserRouter>
        <Provider store={ store }>{component}</Provider>
      </BrowserRouter>,
    ),
    user: userEvent.setup(),
    store,
  };
}

export default renderWithRouterAndRedux;
