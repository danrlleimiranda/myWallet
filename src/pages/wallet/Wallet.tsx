import Header from '../../components/header';
import WalletForm from '../../components/walletForm/WalletForm';
import Table from '../../components/table/Table';
import './wallet.css';

function Wallet() {
  return (
    <div>
      <div className="wallet-container">
        <Header />
        <WalletForm />
      </div>
      <div className="table">
        <Table />
      </div>
    </div>
  );
}

export default Wallet;
