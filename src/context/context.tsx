/* eslint-disable prettier/prettier */
import React, { createContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface StateContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  baseUrl: string;
}

// Provide a default value of the appropriate type
const initialState: StateContextType = {
  user: { name: 'user', email: 'guest' },
  setUser: () => {},
  baseUrl: '',
};

export const StateContext = createContext<StateContextType>(initialState);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ name: 'Guest', email: 'guest@gmail.com' });
  const baseUrl = '';

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        baseUrl,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};