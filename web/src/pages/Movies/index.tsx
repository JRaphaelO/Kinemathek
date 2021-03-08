import React from 'react';
import { userAuth } from '../../hooks/auth';
import MenuContainer from '../../components/Menu';
import { MoviesPageContainer } from './styles';

const MoviesPage = (): JSX.Element => {
  const { signOut, user } = userAuth();

  return (
    <MoviesPageContainer>
      <MenuContainer singOut={signOut} id={user.id} />
      <h1>ai ia</h1>
      <p>ola</p>
    </MoviesPageContainer>
  );
};

export default MoviesPage;
