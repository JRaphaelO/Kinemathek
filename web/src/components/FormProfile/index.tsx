import React, { useCallback, useState } from 'react';
import { FormComponent, ShowOne, ShowDouble, ButtonUpdate } from './styles';
import InputText from '../InputText';
import api from '../../services/api';
import { userAuth } from '../../hooks/auth';

interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  description: string;
  age: number;
}

interface FormProfileProps {
  user: User;
  display: boolean;
}

const FormProfile = (props: FormProfileProps): JSX.Element => {
  const { updateUser } = userAuth();
  const { user, display } = props;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [age, setAge] = useState(String(user.age));
  const [description, setDescription] = useState(user.description);

  const handleUpdate = useCallback(async () => {
    try {
      const response = await api.put(`/user/${user.id}`, {
        name,
        email,
        username,
        age,
        description,
      });

      alert('Usuário atualizado com sucesso!.');

      updateUser({
        id: user.id,
        name,
        email,
        username,
        description,
        age: Number(age),
      } as User);
    } catch (err) {
      console.log(err.message);
      alert('Falha na atualização do usuário.');
    }
  }, [user, name, email, username, age, description, updateUser]);

  return (
    <FormComponent display={display}>
      <ShowDouble>
        <InputText
          label="Username:"
          placeholder={user.username}
          value={username}
          setValue={setUsername}
          color={false}
          inLine={true}
        />
      </ShowDouble>
      <ShowDouble>
        <InputText
          label="Nome:"
          placeholder={user.name}
          value={name}
          setValue={setName}
          color={false}
          inLine={true}
        />
        <InputText
          label="Idade:"
          placeholder={String(user.age)}
          value={age}
          color={false}
          inLine={true}
          setValue={setAge}
        />
      </ShowDouble>

      <ShowDouble>
        <InputText
          label="Email:"
          placeholder={user.email}
          value={email}
          setValue={setEmail}
          color={false}
          inLine={true}
        />
        {/* <InputText
          label="Senha:"
          placeholder="Digite a sua nova senha."
          value={password}
          setValue={setPassword}
          color={false}
          inLine={true}
        /> */}
      </ShowDouble>
      <ShowOne>
        <InputText
          label="Descrição:"
          placeholder={user.description}
          value={description}
          setValue={setDescription}
          color={false}
          inLine={false}
        />
      </ShowOne>
      <ButtonUpdate onClick={handleUpdate}>Confirmar Alterações</ButtonUpdate>
    </FormComponent>
  );
};

export default FormProfile;
