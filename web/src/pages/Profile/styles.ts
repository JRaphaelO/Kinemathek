import styled from 'styled-components';

export const ProfilePageComponent = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`;

export const ProfileContainer = styled.div`
  margin: auto;
  width: 60%;
  height: 680px;

  background: #ffffff;

  border-radius: 15px;
  box-shadow: 0 0 15px;
  padding: 15px;

  hr {
    margin-top: 5px;
    border: 2px solid #000;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
`;

export const ProfileHeaderEditButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #1abccd;

  margin: auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.7s ease;

  &:hover {
    background: #bfe4e8;
  }
`;

export const ProfileHeaderDeleteButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #f00;

  margin: auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.7s ease;

  &:hover {
    background: #f49797;
  }
`;
