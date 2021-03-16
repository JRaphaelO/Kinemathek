import styled from 'styled-components';

interface FormMovieComponentProps {
  display: boolean;
}

export const FormMovieComponent = styled.div<FormMovieComponentProps>`
  position: absolute;
  display: ${(props): string => (props.display ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  background: #00000090;

  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const FormMovieContainer = styled.div`
  position: relative;
  margin: auto;
  width: 60%;
  height: 680px;

  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  color: #fff;

  border-radius: 15px;
  box-shadow: 0 0 15px #000;
  padding: 15px;

  hr {
    margin-top: 5px;
    margin-bottom: 20px;
    border: 2px solid #fff;
  }

  h1 {
    font-weight: 900;
  }
`;

export const ShowLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ShowColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  width: 50px;
  height: 50px;

  border-radius: 25px;

  background: #f00;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.7s ease-out;

  &:hover {
    background: #1b1818;
  }
`;

export const CreateButton = styled.button`
  width: 400px;
  height: 60px;

  cursor: pointer;

  background: #1b1818;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease-out;
  font-size: 1.5rem;
  cursor: pointer;

  margin: 50px auto;

  &:hover {
    background: #fff;
    color: #1b1818;
  }
`;
