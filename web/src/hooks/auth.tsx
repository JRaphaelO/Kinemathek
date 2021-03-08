import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  description: string;
  age: number;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCrendetials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  signIn(Credentials: SignInCrendetials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// eslint-disable-next-line react/prop-types
const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Kinemathek:token');
    const user = localStorage.getItem('@Kinemathek:user');

    console.log({ user, token });

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    try {
      const response = await api.post('/auth', { username, password });
      const { token, user } = response.data;
      console.log(user);

      localStorage.setItem('@Kinemathek:token', token);
      localStorage.setItem('@Kinemathek:user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user });
    } catch (err) {
      console.log(err.message);
      throw new Error('User is not Authenticated');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Kinemathek:token');
    localStorage.removeItem('@Kinemathek:user');
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (updateUser: User) => {
      localStorage.setItem('@Kinemathek:user', JSON.stringify(updateUser));

      setData({
        token: data.token,
        user: {
          ...updateUser,
        },
      });
    },
    [data],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        token: data.token,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const userAuth = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(AuthContext);
  return context;
};

export { AuthContext, AuthProvider, userAuth };
