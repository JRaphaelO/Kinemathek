import React, { useEffect, useState } from 'react';
import {
  DashboardContainer,
  DashboardHome,
  DashboardHomeContainer,
  DashboardHomeContainerTable,
} from './styles';
import MenuContainer from '../../components/Menu';
import { userAuth } from '../../hooks/auth';
import api from '../../services/api';

interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  description: string;
  age: number;
}

const Dashboard: React.FC = () => {
  const { signOut, user } = userAuth();
  const [data, setData] = useState([]);
  const [key, setKey] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function LoadUsers() {
      try {
        await api.get('/user').then(response => {
          setData(response.data);
          console.log(response.data);
        });
      } catch (err) {
        console.log(err.message);
      }
    }

    LoadUsers();
  }, [key]);

  const renderRows = (): any => {
    return data !== null
      ? data.map((user: User) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.description}</td>
          </tr>
        ))
      : null;
  };

  return (
    <DashboardContainer>
      <MenuContainer singOut={signOut} id={user.id} />
      <DashboardHome>
        <DashboardHomeContainer>
          <div>
            <h1>{user.username}</h1>
          </div>
          <hr />
          <DashboardHomeContainerTable>
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>description</th>
                </tr>
              </thead>
              <tbody>{renderRows()}</tbody>
            </table>
          </DashboardHomeContainerTable>
        </DashboardHomeContainer>
      </DashboardHome>
    </DashboardContainer>
  );
};

// private String id;
// private String title;
// private String sinopse;
// private String year;
// private long classification;
// private String imageUrl;
// private String trailerUrl;
// private String category;

export default Dashboard;
