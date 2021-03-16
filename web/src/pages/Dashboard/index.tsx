import React, { useCallback, useEffect, useState } from 'react';
import {
  BackButton,
  DashboardContainer,
  DashboardHome,
  DashboardHomeContainer,
  DashboardHomeContainerTable,
  DashboardHomeContainerTitle,
  ShowCommentMovie,
  ShowDetailsMovie,
  ShowTrailerMovie,
  UnfollowMovie,
} from './styles';
import MenuContainer from '../../components/Menu';
import { userAuth } from '../../hooks/auth';
import api from '../../services/api';
import ReactPlayer from 'react-player';
import { BiArrowBack } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';

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

interface MovieDetails {
  id: string;
  comment: string;
  note: number;
  movie: Movie;
}

const Dashboard: React.FC = () => {
  const { signOut, user } = userAuth();
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(true);
  const [key, setKey] = useState(false);
  const [selectedMovie, setSelecetdMovie] = useState<MovieDetails>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function LoadUsers() {
      try {
        await api.get(`/listMovies/${user.id}`).then(response => {
          setData(response.data);
          console.log(response.data);
        });
      } catch (err) {
        console.log(err.message);
      }
    }

    LoadUsers();
  }, [key]);

  const renderRows = (): any => {
    return data !== null
      ? data.map((movieDetails: MovieDetails) => (
          <tr
            key={movieDetails.id}
            onClick={(): void => {
              setSelecetdMovie(movieDetails);
              setDisplay(false);
            }}
          >
            <td>{movieDetails.movie.title}</td>
            <td>{movieDetails.comment}</td>
            <td>{movieDetails.note}</td>
          </tr>
        ))
      : null;
  };

  const handleUnfollow = useCallback(async () => {
    try {
      const response = await api.delete(`/listMovies/${selectedMovie?.id}`);
      if (response.status === 200) {
        alert('Comentário excluido com sucesso!');
        setDisplay(true);
        setKey(!key);
      }
    } catch (err) {
      console.log(err.message);
      alert(err.message);
    }
  }, [selectedMovie]);

  return (
    <DashboardContainer>
      <MenuContainer singOut={signOut} id={user.id} />
      <DashboardHome>
        <DashboardHomeContainer>
          <DashboardHomeContainerTitle>
            <div>
              <h1>{user.username}</h1>
            </div>
            <div>
              <UnfollowMovie display={!display} onClick={handleUnfollow}>
                <AiFillHeart />
              </UnfollowMovie>
              <BackButton display={!display} onClick={() => setDisplay(true)}>
                <BiArrowBack />
              </BackButton>
            </div>
          </DashboardHomeContainerTitle>

          <hr />
          <DashboardHomeContainerTable display={display}>
            <table>
              <thead>
                <tr>
                  <th>Filme</th>
                  <th>Comentário</th>
                  <th>Nota</th>
                </tr>
              </thead>
              <tbody>{renderRows()}</tbody>
            </table>
          </DashboardHomeContainerTable>
          <ShowDetailsMovie display={!display}>
            <ShowTrailerMovie>
              <ReactPlayer url={selectedMovie?.movie.trailerUrl} />
            </ShowTrailerMovie>
            {/* <img
              src={selectedMovie?.movie.imageUrl}
              alt={selectedMovie?.movie.title}
            /> */}
            <h1>
              <>
                {selectedMovie?.movie.title} ({selectedMovie?.movie.year})
              </>
              <strong>PG - {selectedMovie?.movie.classification} </strong>
            </h1>
            <p> {selectedMovie?.movie.sinopse}. </p>
            <ShowCommentMovie>
              <strong> Comentário: </strong>
              <strong> Nota: {selectedMovie?.note} </strong>
            </ShowCommentMovie>
            <p> {selectedMovie?.comment} </p>
          </ShowDetailsMovie>
        </DashboardHomeContainer>
      </DashboardHome>
    </DashboardContainer>
  );
};

export default Dashboard;
