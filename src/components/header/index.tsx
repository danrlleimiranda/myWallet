import { useSelector } from 'react-redux';
import { GlobalStateType } from '../../types';
import './header.css';
import icon from '../../../imgs/icon.svg';
import trybeWallet from '../../../imgs/logoTrybeWallet.png';
import coinIcon from '../../../imgs/Moedas.svg';

function Header() {
  const email = useSelector((globalState: GlobalStateType) => globalState.user.email);
  const total = useSelector((globalState: GlobalStateType) => globalState
    .wallet.allExpenses);

  return (
    <header>
      <img src={ trybeWallet } alt="" />
      <div className="expenses">
        <img src={ coinIcon } alt="" />

        <span>Total de despesas:</span>
        <p data-testid="total-field">
          {total}
        </p>

        <p data-testid="header-currency-field">BRL</p>
      </div>
      <div className="email">
        <img src={ icon } alt="" />
        <p data-testid="email-field">{email}</p>
      </div>
    </header>
  );
}

export default Header;
