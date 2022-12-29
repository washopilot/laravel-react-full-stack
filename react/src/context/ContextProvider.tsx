import React, { createContext, useContext, useState } from "react";

interface IStateContexProps {
    user: any;
    token: null | string;
    setToken: (token: string) => void;
    setUser: React.Dispatch<React.SetStateAction<{}>>;
}

interface IContextProviderProps {
    children: React.ReactNode;
}

const StateContext = createContext<IStateContexProps>({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }: IContextProviderProps) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken = (token: string) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
