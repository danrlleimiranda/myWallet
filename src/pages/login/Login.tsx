import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAction } from '../../redux/actions';
import trybeWallet from '../../../imgs/logoTrybeWallet.png';
import './login.css';

function Login() {
  const initialState = {
    email: '',
    senha: '',
  };
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(userAction(form.email));
    navigate('/carteira');
  };

  const isValid = () => {
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return !!((regexEmail.test(form.email) === false || form.senha.length < 6));
  };

  return (
    <form action="" className="form-login">
      <img src={ trybeWallet } alt="" />
      <br />
      <label htmlFor="email">
        Login:
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu login"
          value={ form.email }
          data-testid="email-input"
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <label htmlFor="password">
        Senha:
        <br />
        <input
          type="password"
          name="senha"
          id="password"
          placeholder="Digite a sua senha"
          value={ form.senha }
          data-testid="password-input"
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <button
        type="submit"
        disabled={ isValid() }
        onClick={ (event) => handleSubmit(event) }
      >
        Entrar

      </button>
    </form>
  );
}

export default Login;
