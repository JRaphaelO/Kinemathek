import React, { useEffect, useState } from 'react';
import { userAuth } from '../../hooks/auth';
import MenuContainer from '../../components/Menu';
import {
  MoviesPageContainer,
  ButtonCreate,
  CardMovie,
  CardsContainer,
  CardMovieTextContainer,
  CardMovieViewMore,
} from './styles';
import { AiOutlinePlus } from 'react-icons/ai';
import FormMovie from '../../components/FormMovie';
import api from '../../services/api';
import ShowMovie from '../../components/ShowMovie';

interface Movie {
  id: string;
  title: string;
  sinopse: string;
  year: string;
  classification: string;
  imageUrl: string;
  trailerUrl: string;
  category: string;
  created_data: string;
  updated_data: string;
}

const MoviesPage = (): JSX.Element => {
  const [display, setDisplay] = useState(true);
  const [displayMovie, setDisplayMovie] = useState(false);
  const { signOut, user } = userAuth();
  const [data, setData] = useState([]);
  const [selectId, setSelectId] = useState(String);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function LoadMovies() {
      try {
        await api.get('/movie').then(response => {
          setData(response.data);
          console.log(response.data);
        });
      } catch (err) {
        console.log(err.message);
      }
    }

    LoadMovies();
  }, [display]);

  const renderCards = (): any => {
    return data.map((movie: Movie) => (
      <CardMovie key={movie.id}>
        <img src={movie.imageUrl} alt={movie.title} />
        <CardMovieTextContainer>
          <h1>{movie.title}</h1>
          <p>{movie.sinopse}</p>
        </CardMovieTextContainer>
        <CardMovieViewMore
          onClick={() => {
            setSelectId(movie.id);
            setDisplayMovie(true);
          }}
        >
          Ver mais
        </CardMovieViewMore>
      </CardMovie>
    ));
  };

  return (
    <MoviesPageContainer>
      <MenuContainer singOut={signOut} id={user.id} />
      <ButtonCreate display={display} onClick={() => setDisplay(!display)}>
        <AiOutlinePlus size={25} />
      </ButtonCreate>
      <CardsContainer>{renderCards()}</CardsContainer>
      <FormMovie display={!display} setDisplay={setDisplay} />
      <ShowMovie
        display={displayMovie}
        id={selectId}
        setDisplay={setDisplayMovie}
      />
    </MoviesPageContainer>
  );
};

export default MoviesPage;
