import React from 'react';
import { TOKEN_POST, USER_GET } from '../../api.js';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { url, options } = TOKEN_POST({
    username: username.value,
    password: password.value,
  });

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  return (
    <section>
      <h1>Login</h1>
      <form actiob="" onSubmit={handleSubmit}>
        <Input type="text" name="login" label="Usuário" {...username} />
        <Input type="password" name="password" label="Senha" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
