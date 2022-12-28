import React from 'react';
import { USER_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';

const LoginCreate = () => {
  const usuario = useForm();
  const email = useForm('email');
  const senha = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: usuario.value,
      email: email.value,
      password: senha.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(usuario.value, senha.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="usuario" {...usuario} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="senha" {...senha} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error && <Error error={error} />}
      </form>
    </section>
  );
};

export default LoginCreate;
