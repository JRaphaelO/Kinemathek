import styled from 'styled-components';

interface ShowMovieComponentProps {
  display: boolean;
}

export const ShowMovieComponent = styled.div<ShowMovieComponentProps>`
  position: absolute;
  display: ${(props): string => (props.display ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  background: #00000090;

  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const ShowMovieContainer = styled.div`
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

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  width: 30px;
  height: 30px;

  border-radius: 25px;

  background: #f00;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.7s ease-out;

  &:hover {
    background: #1b1818;
  }
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 20px;
  right: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  width: 30px;
  height: 30px;

  border-radius: 25px;

  background: #1b1818;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.7s ease-out;

  &:hover {
    color: #f00;
    background: #fff;
  }
`;

export const ShowMovieTextContainer = styled.div<ShowMovieComponentProps>`
  width: 100%;
  height: 88%;

  display: ${(props): string => (props.display ? 'flex' : 'none')};
  flex-direction: column;
`;

export const ShowMovieTextContainerVideo = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 25px;
`;

export const ShowDouble = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin-right: auto;
    display: flex;
    align-items: center;
    flex-direction: row;

    font-size: 1.5rem;

    p {
      font-weight: 100;
      margin-left: 10px;
    }
  }
`;

export const ShowOne = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin-right: auto;
    display: flex;
    align-items: right;
    flex-direction: column;

    font-size: 1.5rem;

    p {
      font-weight: 100;
      margin-left: 10px;
    }
  }
`;

export const PainelComment = styled.div<ShowMovieComponentProps>`
  width: 100%;
  height: 88%;

  display: ${(props): string => (props.display ? 'flex' : 'none')};
  flex-direction: column;

  button {
    margin: auto;
    width: 50%;
    height: 3rem;

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

    &:hover {
      background: #fff;
      color: #1b1818;
    }

    @media (max-width: 1024px) {
      width: 80%;
      margin: 0.5em auto;
    }
  }
`;
