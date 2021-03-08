import React, { useCallback, useState } from 'react';
import { RegisterContainer, RegisterButton, ReturnButton } from './styles';
import InputText from '../InputText';
import api from '../../services/api';

interface RegisterProps {
  display: boolean;
  setDisplay: (value: boolean) => void;
}

interface ResponseData {
  data: {
    id: string;
    username: string;
    email: string;
    name: string;
    description: string;
    age: number;
  };
}

const Register = (props: RegisterProps): JSX.Element => {
  const [name, setName] = useState(String);
  const [password, setPassword] = useState(String);
  const [email, setEmail] = useState(String);
  const [username, setUsername] = useState(String);
  const [age, setAge] = useState(String);
  const [description, setDescription] = useState(String);

  const handleSingUP = useCallback(() => {
    try {
      if (
        name === '' ||
        password === '' ||
        email === '' ||
        username === '' ||
        age === ''
      ) {
        console.log('Todos os campos precisam ser preenchidos!');
        return;
      }

      setDescription('');
      api
        .post('/user', { name, password, email, username, age, description })
        .then(() => {
          setName('');
          setPassword('');
          setEmail('');
          setAge('');
          setUsername('');
          setPassword('');
          props.setDisplay(true);
        });
    } catch (err) {
      console.log(err.message);
    }
  }, [name, password, email, username, age, description, props]);

  return (
    <RegisterContainer display={props.display}>
      <div>
        <InputText
          label="Username:"
          placeholder="Digite seu username"
          value={username}
          color={false}
          inLine={false}
          setValue={setUsername}
        />

        <InputText
          label="Nome:"
          placeholder="Digite seu nome"
          value={name}
          color={false}
          inLine={false}
          setValue={setName}
        />

        <InputText
          label="Email:"
          placeholder="Digite seu email"
          value={email}
          color={false}
          inLine={false}
          setValue={setEmail}
        />

        <InputText
          label="Idade:"
          placeholder="Digite sua idade"
          value={age}
          color={false}
          inLine={false}
          setValue={setAge}
        />

        <InputText
          label="Senha:"
          placeholder="Digite sua senha"
          is_password
          value={password}
          color={false}
          inLine={false}
          setValue={setPassword}
        />

        <RegisterButton onClick={(): void => handleSingUP()}>
          Registrar
        </RegisterButton>

        <ReturnButton onClick={(): void => props.setDisplay(true)}>
          Já Registrado, click aqui.
        </ReturnButton>
      </div>
    </RegisterContainer>
  );
};

export default Register;
