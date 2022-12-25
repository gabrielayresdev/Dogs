import React from 'react';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json));
  }

  return (
    <section>
      <h1>Login</h1>
      <form actiob="" onSubmit={handleSubmit}>
        <Input type="text" name="login" label="Usuário" />
        <Input type="password" name="password" label="Senha" />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
