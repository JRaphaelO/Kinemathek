import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import {
  ShowMovieComponent,
  ShowMovieContainer,
  CloseButton,
  ShowMovieTextContainer,
  ShowMovieTextContainerVideo,
  ShowDouble,
  ShowOne,
  LikeButton,
  PainelComment,
} from './styles';
import { AiOutlineClose, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import ReactPlayer from 'react-player';
import { ShowColumn } from '../FormMovie/styles';
import InputText from '../InputText';
import { userAuth } from '../../hooks/auth';

interface ShowMovieProps {
  display: boolean;
  id: string;
  setDisplay: (value: boolean) => void;
}

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

const ShowMovie = (props: ShowMovieProps): JSX.Element => {
  const { user } = userAuth();
  const [data, setData] = useState<Movie>();
  const [addMovie, setAddMovie] = useState(true);
  const [comment, setComment] = useState(String);
  const [note, setNote] = useState(String);

  const handleAddMovie = useCallback(async () => {
    try {
      if (comment === '' || note === '') {
        alert('Preencha os campos corretamente.');
        return;
      }

      const response = await api.post('/listMovies', {
        user_id: user.id,
        movie_id: data?.id,
        note,
        comment,
      });

      if (response.status === 200) {
        setComment('');
        setNote('');
        alert('Filme criado com sucesso!');
        props.setDisplay(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  }, [user, data, note, comment]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function LoadMovie(id: string) {
      try {
        await api.get(`/movie?id=${id}`).then(response => {
          setData(response.data[0]);
          console.log(response.data[0]);
          console.log(data);
        });
      } catch (err) {
        props.setDisplay(false);
        console.log(err.message);
      }
    }

    LoadMovie(props.id);
  }, [props]);

  return (
    <ShowMovieComponent display={props.display}>
      <ShowMovieContainer>
        <h1>{data?.title}</h1>
        <hr />

        <CloseButton onClick={() => props.setDisplay(false)}>
          <AiOutlineClose />
        </CloseButton>

        <LikeButton onClick={() => setAddMovie(!addMovie)}>
          <AiFillHeart />
        </LikeButton>

        <ShowMovieTextContainer display={addMovie}>
          <ShowMovieTextContainerVideo>
            <ReactPlayer url={data?.trailerUrl} />
          </ShowMovieTextContainerVideo>
          <ShowDouble>
            <div>
              <strong>Titulo: </strong>
              <p>{`${data?.title}, (${data?.year}) PG-${data?.classification}`}</p>
            </div>
            <div>
              <strong>Categoria: </strong>
              <p>{data?.category}</p>
            </div>
          </ShowDouble>
          <ShowOne>
            <div>
              <strong>Sinopse: </strong>
              <p>{data?.sinopse}</p>
            </div>
          </ShowOne>
        </ShowMovieTextContainer>

        <PainelComment display={!addMovie}>
          <InputText
            label="Comentário:"
            placeholder="Digite seu comentário sobre o filme"
            value={comment}
            setValue={setComment}
            inLine={false}
            color={false}
          />
          <InputText
            label="Nota:"
            placeholder="Digite sua nota do filme"
            value={note}
            setValue={setNote}
            inLine={false}
            color={false}
          />

          <button onClick={() => handleAddMovie()}>Adicionar</button>
        </PainelComment>
        {/* <img src={data?.imageUrl} alt={data?.title} /> */}
      </ShowMovieContainer>
    </ShowMovieComponent>
  );
};

export default ShowMovie;
