import styled from 'styled-components';

export const HomeSection = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  display: flex;
  flex-direction: row;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: default;

  color: #000;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 15%;
  }

  h1 {
    margin-left: 30px;
    font-family: 'Allerta Stencil', sans-serif;
    font-size: 5em;
  }

  p {
    color: #ababab;
    width: 80%;
    max-width: 600px;
    line-height: 1em;
    margin-top: 1em;
    font-size: 1.5em;
  }

  @media (max-width: 1024px) {
    h1 {
      margin-left: 15px;
      font-size: 3.5em;
    }
    p {
      font-size: 1em;
    }
  }

  @media (max-width: 768px) {
    height: 30vh;
    background: #ffffff00;

    h1 {
      font-size: 3em;
    }
    p {
      color: #000;
      width: 60%;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 2em;
    }

    p {
      font-size: 0.8em;
      width: 80%;
    }
  }
`;
