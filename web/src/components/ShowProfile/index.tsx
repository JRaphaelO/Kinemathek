import React from 'react';
import {
  ShowComponent,
  ShowNameAge,
  ShowEmail,
  ShowDescription,
} from './styles';

interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  description: string;
  age: number;
}

interface ShowProfileProps {
  user: User;
  display: boolean;
}

const ShowProfile = (props: ShowProfileProps): JSX.Element => {
  const { user, display } = props;
  return (
    <ShowComponent display={display}>
      <ShowNameAge>
        <div>
          <strong>Nome:</strong>
          <p>{user.name}</p>
        </div>

        <div>
          <strong>Idade: </strong>
          <p>{user.age}</p>
        </div>
      </ShowNameAge>
      <ShowEmail>
        <strong>Email:</strong>
        <p>{user.email}</p>
      </ShowEmail>
      <ShowDescription>
        <strong>Descrição:</strong>
        <p>{user.description}</p>
      </ShowDescription>
    </ShowComponent>
  );
};

export default ShowProfile;
