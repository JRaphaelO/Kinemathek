import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100vw;
  height: 80px;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const LogoContainer = styled.div`
  margin-left: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: default;

  img {
    width: 60px;
  }

  h1 {
    margin-left: 15px;
    font-family: 'Allerta Stencil', sans-serif;
  }
`;

export const MenuItens = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  margin-right: 10%;

  a {
    margin: 0 10px;
    color: #000;
    transition: border 1s ease-in-out;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
      border-bottom: 1px solid #000;
    }
  }
`;

export const SingOutButton = styled.div`
  margin: 0 10px;
  width: 60px;
  height: 25px;
  border-radius: 10px;

  background: #f00;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background: #795151;
  }
`;
