import styled from 'styled-components';

interface ShowComponentProps {
  display: boolean;
}

export const ShowComponent = styled.div<ShowComponentProps>`
  display: ${(props): string => (props.display ? '' : 'none')};
  width: 100%;
  height: 600px;

  margin-top: 10px;
  font-size: 1.5rem;
`;

export const ShowNameAge = styled.div`
  margin: 50px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    p {
      margin-left: 10px;
    }
  }
`;

export const ShowEmail = styled.div`
  margin: 50px 30px;
  display: flex;

  p {
    margin-left: 10px;
  }
`;

export const ShowDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 30px;

  p {
    margin-top: 10px;
    width: 100%;
  }
`;
