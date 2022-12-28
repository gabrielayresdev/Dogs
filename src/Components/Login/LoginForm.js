import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { UserContext } from '../../UserContext.js';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" name="login" label="Usuário" {...username} />
        <Input type="password" name="password" label="Senha" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />

        <Link to="/Login/perdeu" className={styles.perdeu}>
          Esqueci minha senha
        </Link>
        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link className={stylesBtn.button} to="/login/criar">
            Cadastro
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
