import { useSelector } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import { GlobalStateType } from '../types';

function Wallet() {
  const expenses = useSelector((globalState:
  GlobalStateType) => globalState.wallet.expenses);
  return (
    <div>
      <Header />
      <WalletForm />
      <Table />
    </div>
  );
}

export default Wallet;
