import React, { useState } from 'react';
import Register from '../../components/Register';
import Login from '../../components/Login';
import { HomeSection, UpContainer } from './styles';

import film from '../../assets/images/film.svg';

const Home: React.FC = () => {
  const [display, setDisplay] = useState(true);

  return (
    <HomeSection>
      <UpContainer>
        <div>
          <img src={film} alt="logo" />

          <h1>Kinemathek</h1>
        </div>

        <p>
          Liste, adicione e comente sobre os seus filmes favoritos, com a
          comunidade.
        </p>
      </UpContainer>

      <Login display={display} setDisplay={setDisplay} />
      <Register display={!display} setDisplay={setDisplay} />
    </HomeSection>
  );
};

export default Home;
