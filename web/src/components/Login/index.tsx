import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { userAuth } from '../../hooks/auth';
import InputText from '../InputText';
import { LoginContainer, ButtonLogin, ButtonRegister } from './styles';

interface LoginProps {
  display: boolean;
  setDisplay: (value: boolean) => void;
}

const Login = (props: LoginProps): JSX.Element => {
  const history = useHistory();
  const { signIn, user } = userAuth();
  const [username, setUsername] = useState(String);
  const [password, setPassword] = useState(String);

  const handleSingIN = useCallback(async () => {
    try {
      if (username === '' || password === '') {
        console.log('Preencha os campos corretamente.');
        return;
      }
      await signIn({ username, password });

      console.log(user);
      history.push('dashboard');
    } catch (err) {
      console.error(err.message);
    }
  }, [username, password, signIn, history, user]);

  return (
    <LoginContainer display={props.display}>
      <div>
        <InputText
          label="Username:"
          placeholder="Digite seu username"
          value={username}
          setValue={setUsername}
          inLine={false}
          color={false}
        />
        <InputText
          label="Senha:"
          placeholder="Digite sua senha"
          is_password
          value={password}
          setValue={setPassword}
          inLine={false}
          color={false}
        />

        <ButtonLogin onClick={(): Promise<void> => handleSingIN()}>
          Login
        </ButtonLogin>
        <ButtonRegister onClick={(): void => props.setDisplay(false)}>
          Registrar
        </ButtonRegister>
      </div>
    </LoginContainer>
  );
};

export default Login;
