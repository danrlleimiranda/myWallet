import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Table() {
  const expenses = useSelector((globalState:
  GlobalStateType) => globalState.wallet.expenses);

  return (
    <table>
      <tr>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </tr>
      {expenses && expenses.map(({ id, description, tag, method,
        value, currency, exchangeRates }) => (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{exchangeRates[currency].name}</td>
            <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
            <td>
              {Number(Number(value) * Number(exchangeRates[currency].ask))
                .toFixed(2)}

            </td>
            <td>Real</td>
            <td>
              <button>Editar</button>
              {' '}
              <button>Excluir</button>
            </td>
          </tr>
      ))}
    </table>
  );
}

export default Table;
