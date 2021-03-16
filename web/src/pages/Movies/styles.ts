import styled from 'styled-components';

interface ButtonCreateProps {
  display: boolean;
}

export const MoviesPageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`;

export const ButtonCreate = styled.button<ButtonCreateProps>`
  position: absolute;
  background: #fff;

  right: 50px;
  bottom: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.7s ease-out;

  &:hover {
    background: #1b1818;
    color: #fff;
  }
`;

export const CardsContainer = styled.div`
  overflow-y: auto;
  padding: 30px;

  display: flex;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const CardMovie = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;
  height: 300px;
  margin: 20px 10px;

  background: #fff;
  border-radius: 15px;

  box-shadow: 0 0 1px;

  display: flex;
  padding: 25px;

  img {
    width: 150px;
    height: 220px;
  }
`;

export const CardMovieTextContainer = styled.div`
  margin: 10px;
  h1 {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    margin-right: 10px;
    font-size: 0.8rem;
    width: 100%;
    line-height: 1.1rem;

    text-align: justify;
  }
`;

export const CardMovieViewMore = styled.button`
  position: absolute;
  bottom: 15px;
  left: 125px;

  width: 200px;
  height: 50px;

  background: #1b1818;
  color: #fff;

  font-size: 1.2rem;
  transition: all 0.7s ease-out;

  border-radius: 15px;
  box-shadow: 0 0 15px;

  &:hover {
    background: #1dbcce;
  }
`;
