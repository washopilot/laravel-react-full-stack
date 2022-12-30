import React, { createContext, useContext, useState } from 'react';

type User = {
    name: string;
};

interface IStateContexProps {
    user: User;
    token: string | null;
    setToken: (token: string) => void;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

interface IContextProviderProps {
    children: React.ReactNode;
}

const StateContext = createContext<IStateContexProps>({} as IStateContexProps);

export const ContextProvider = ({ children }: IContextProviderProps) => {
    const [user, setUser] = useState({ name: 'Jhon' });
    // const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [token, _setToken] = useState<IStateContexProps['token']>(null);

    const setToken = (token: string) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken
            }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
