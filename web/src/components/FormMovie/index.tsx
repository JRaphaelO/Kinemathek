import React, { useCallback, useState } from 'react';
import InputText from '../InputText';
import {
  FormMovieComponent,
  FormMovieContainer,
  ShowLine,
  ShowColumn,
  CloseButton,
  CreateButton,
} from './styles';
import { AiOutlineClose } from 'react-icons/ai';
import api from '../../services/api';

interface FormMovieProps {
  display: boolean;
  setDisplay: (value: boolean) => void;
}

const FormMovie = (props: FormMovieProps): JSX.Element => {
  const [title, setTitle] = useState(String);
  const [year, setYear] = useState(String);
  const [classification, setClassification] = useState(String);
  const [imageUrl, setImageUrl] = useState(String);
  const [trailerUrl, setTrailerUrl] = useState(String);
  const [category, setCategory] = useState(String);
  const [sinopse, setSinopse] = useState(String);

  const clearForm = (): void => {
    setTitle('');
    setSinopse('');
    setYear('');
    setClassification('');
    setImageUrl('');
    setTrailerUrl('');
    setCategory('');
  };

  const handleCreate = useCallback(async () => {
    try {
      if (
        title === '' ||
        category === '' ||
        year === '' ||
        classification === '' ||
        imageUrl === '' ||
        trailerUrl === '' ||
        sinopse === ''
      ) {
        alert('Preencha os campos corretamente.');
        return;
      }

      const response = await api.post('/movie', {
        title,
        year,
        classification,
        imageUrl,
        trailerUrl,
        category,
        sinopse,
      });

      console.log(response.data);

      if (response.status === 200) {
        clearForm();
        alert('Filme criado com sucesso!');
        props.setDisplay(true);
      }
    } catch (err) {
      console.log(err.message);
    }
  }, [
    title,
    category,
    year,
    classification,
    imageUrl,
    trailerUrl,
    sinopse,
    props,
  ]);

  return (
    <FormMovieComponent display={props.display}>
      <FormMovieContainer>
        <h1>Adicione um Filme</h1>
        <hr />
        <ShowColumn>
          <InputText
            label="Titulo:"
            placeholder="Digite o titulo."
            value={title}
            setValue={setTitle}
            color={false}
            inLine={false}
          />
          <InputText
            label="Ano de lançamento:"
            placeholder="Digite o ano de lançamento."
            value={year}
            setValue={setYear}
            color={false}
            inLine={false}
          />
        </ShowColumn>
        <ShowColumn>
          <InputText
            label="Categoria:"
            placeholder="Digite a categoria."
            value={category}
            setValue={setCategory}
            color={false}
            inLine={false}
          />
          <InputText
            label="Classificação:"
            placeholder="Digite a classificação."
            value={classification}
            setValue={setClassification}
            color={false}
            inLine={false}
          />
        </ShowColumn>
        <ShowColumn>
          <InputText
            label="Link da imagem de capa:"
            placeholder="Digite o link para a imagem de capa."
            value={imageUrl}
            setValue={setImageUrl}
            color={false}
            inLine={false}
          />
          <InputText
            label="Link do trailer:"
            placeholder="Digite o link para o trailer do filme."
            value={trailerUrl}
            setValue={setTrailerUrl}
            color={false}
            inLine={false}
          />
        </ShowColumn>
        <ShowLine>
          <InputText
            label="Sinopse:"
            placeholder="Digite a sinopse do filme."
            value={sinopse}
            setValue={setSinopse}
            color={false}
            inLine={false}
          />
        </ShowLine>
        <CloseButton
          onClick={(): void => {
            clearForm();
            props.setDisplay(true);
          }}
        >
          <AiOutlineClose size={25} />
        </CloseButton>

        <CreateButton onClick={handleCreate}>Adicionar</CreateButton>
      </FormMovieContainer>
    </FormMovieComponent>
  );
};

export default FormMovie;
