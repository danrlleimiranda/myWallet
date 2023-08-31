import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function Header() {
  const email = useSelector((globalState: GlobalStateType) => globalState.user.email);
  const total = useSelector((globalState: GlobalStateType) => globalState
    .wallet.allExpenses);

  return (
    <header>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">{total}</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
