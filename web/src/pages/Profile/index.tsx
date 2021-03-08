import React, { useCallback, useState } from 'react';
import Menu from '../../components/Menu';
import ShowProfile from '../../components/ShowProfile';
import FormProfile from '../../components/FormProfile';
import { userAuth } from '../../hooks/auth';
import {
  ProfilePageComponent,
  ProfileContainer,
  ProfileHeader,
  ProfileHeaderDeleteButton,
  ProfileHeaderEditButton,
} from './styles';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import api from '../../services/api';

const ProfilePage = (): JSX.Element => {
  const { user, signOut } = userAuth();
  const [display, setDisplay] = useState(true);

  const handleDelete = useCallback(async () => {
    try {
      const id = user.id;
      await api.delete(`/user/${id}`);
      // alert('Usuário deletado com sucesso.');
      signOut();
    } catch (err) {
      console.log(err);
      alert('Falha ao apagar o usuário.');
    }
  }, [user, signOut]);

  return (
    <ProfilePageComponent>
      <Menu singOut={signOut} id={user.id} />
      <ProfileContainer>
        <ProfileHeader>
          <h1>{user.username}</h1>
          <div>
            <ProfileHeaderEditButton onClick={() => setDisplay(!display)}>
              <AiOutlineEdit size={30} />
            </ProfileHeaderEditButton>
            <ProfileHeaderDeleteButton onClick={handleDelete}>
              <AiOutlineDelete size={30} />
            </ProfileHeaderDeleteButton>
          </div>
        </ProfileHeader>
        <hr />

        <ShowProfile user={user} display={display} />
        <FormProfile user={user} display={!display} />
      </ProfileContainer>
    </ProfilePageComponent>
  );
};

export default ProfilePage;
