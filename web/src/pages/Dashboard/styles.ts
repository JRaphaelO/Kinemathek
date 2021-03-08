import styled from 'styled-components';

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

export const DashboardHomeContainerTable = styled.div`
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
    height: 100%;

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
      td {
        height: 40px;
      }
    }
  }
`;
