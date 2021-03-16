import styled from 'styled-components';

interface DashboardProps {
  display: boolean;
}

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`;

export const DashboardHome = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DashboardHomeContainer = styled.div`
  width: 60%;
  height: 80%;
  padding: 20px;
  background: #fff;

  border-radius: 20px;
  hr {
    margin-top: 5px;
    border: 2px solid #000;
  }
`;

export const DashboardHomeContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
  }
`;

export const DashboardHomeContainerTable = styled.div<DashboardProps>`
  display: ${(props): string => (props.display ? '' : 'none')};
  justify-content: space-between;
  overflow-y: auto;
  height: 600px;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  table {
    text-align: center;
    margin-top: 25px;

    width: 100%;

    border-collapse: collapse;

    thead {
      width: 100%;
      padding: 20px;
      background: #20bacf;

      th {
        height: 40px;
      }
    }

    tbody {
      tr {
        cursor: pointer;
        height: 40px;
        background: #baf4fc;

        &:hover {
          background: #7ab7bf;
        }
      }
    }
  }
`;

export const ShowDetailsMovie = styled.div<DashboardProps>`
  display: ${(props): string => (props.display ? '' : 'none')};

  h1 {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  p {
    width: 100%;
  }
`;

export const ShowTrailerMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
`;

export const ShowCommentMovie = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const UnfollowMovie = styled.button<DashboardProps>`
  display: ${(props): string => (props.display ? 'flex' : 'none')};

  align-items: center;
  justify-content: center;
  margin: auto 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  background: #f00;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 25px;

  transition: all 0.7s ease-out;

  &:hover {
    color: #f00;
    background: #1b1818;
  }
`;

export const BackButton = styled.button<DashboardProps>`
  display: ${(props): string => (props.display ? 'flex' : 'none')};

  align-items: center;
  justify-content: center;
  margin: auto 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  background: #1b1818;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 25px;

  transition: all 0.7s ease-out;

  &:hover {
    color: #fff;
    background: #f00;
  }
`;
