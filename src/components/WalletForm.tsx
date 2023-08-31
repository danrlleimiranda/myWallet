import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GlobalStateType } from '../types';
import { fetchAPI } from '../redux/actions';

function WalletForm() {
  const initialState = {
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',

  };
  const [form, setForm] = useState(initialState);

  const dispatch: Dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,

    });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(fetchAPI(form));
    setForm(initialState);
  };

  const currencies = useSelector((globalState:
  GlobalStateType) => globalState.wallet.currencies);

  return (
    <form>
      <label htmlFor="valor">
        Valor:
        <input
          name="value"
          type="number"
          id="valor"
          data-testid="value-input"
          value={ form.value }
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <label htmlFor="currency">
        <select
          data-testid="currency-input"
          name="currency"
          defaultValue={ form.currency }
          id="currency"
          onChange={ (event) => handleChange(event) }
        >
          {currencies.map((currency) => (
            <option key={ currency } value={ currency }>
              {currency}
            </option>
          ))}

        </select>
      </label>
      <label htmlFor="select-method">
        Metodo de Pagamento:
        <select
          data-testid="method-input"
          id="select-method"
          name="method"
          defaultValue={ form.method }
          onChange={ (event) => handleChange(event) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
        </select>

      </label>
      <label htmlFor="select-tag">
        Tag
        <select
          data-testid="tag-input"
          id="select-tag"
          name="tag"
          defaultValue={ form.tag }
          onChange={ (event) => handleChange(event) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

      </label>
      <label htmlFor="descrição">
        Descrição:
        <input
          type="text"
          id="descrição"
          name="description"
          value={ form.description }
          data-testid="description-input"
          onChange={ (event) => handleChange(event) }
        />

      </label>

      <button
        type="submit"
        onClick={ (event) => handleClick(event) }
      >
        Adicionar despesa

      </button>
    </form>
  );
}

export default WalletForm;
