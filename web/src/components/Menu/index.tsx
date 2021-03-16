import React, { useState } from 'react';
import {
  LogoContainer,
  MenuContainer,
  MenuItens,
  SingOutButton,
} from './styles';
import film from '../../assets/images/film.svg';

interface MenuProps {
  singOut: () => void;
  id: string;
}

const Menu = (props: MenuProps): JSX.Element => {
  return (
    <MenuContainer>
      <LogoContainer>
        <img src={film} alt="logo image" />
        <h1>Kinemathek</h1>
      </LogoContainer>
      <MenuItens>
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href={`/perfil/${props.id}`}>Perfil</a>
        {/* <a href="/find">Pesquisar</a> */}
        <SingOutButton onClick={() => props.singOut()}>Sair</SingOutButton>
      </MenuItens>
    </MenuContainer>
  );
};

export default Menu;
