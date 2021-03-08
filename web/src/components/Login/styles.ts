import styled from 'styled-components';

interface BottomContainerProps {
  display: boolean;
}

export const LoginContainer = styled.div<BottomContainerProps>`
  display: ${(props): string => (props.display ? 'flex' : 'none')};

  width: 100vw;
  height: 100vh;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 1s ease-in-out;

  div {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 1024px) {
    div {
      margin: 0 auto;
      width: 80%;
    }
  }
`;

export const ButtonLogin = styled.button`
  width: 100%;
  height: 3rem;

  margin: 1rem 0;

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
`;

export const ButtonRegister = styled.button`
  width: 100%;
  height: 3rem;

  margin: 1rem 0;

  border: 2px solid #ffffff;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease-out;

  background: rgba(0, 0, 0, 0);
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background: #1b1818;
    color: #ffffff;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
  }

  @media (max-width: 1024px) {
    width: 80%;
    margin: 0.5em auto;
  }
`;
