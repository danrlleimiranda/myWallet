import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateType } from '../../types';
import { deleteExpense, editingExpense } from '../../redux/actions';
import eraseButton from '../../../imgs/apagar.svg';
import editButton from '../../../imgs/Editar.svg';
import './table.css';

function Table() {
  const expenses = useSelector((globalState:
  GlobalStateType) => globalState.wallet.expenses);
  const dispatch = useDispatch();

  return (

    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Categoria da despesa</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0 && expenses.map(({ id, description, tag, method,
          value, currency, exchangeRates }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{Number(value).toFixed(2)}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>
                {Number(Number(value) * Number(exchangeRates[currency].ask))
                  .toFixed(2)}

              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  onClick={ () => dispatch(editingExpense(id)) }
                >
                  <img src={ editButton } alt="" />

                </button>
                {' '}
                <button
                  onClick={ () => dispatch(deleteExpense(expenses, id)) }
                  data-testid="delete-btn"
                >
                  <img src={ eraseButton } alt="" />

                </button>
              </td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
