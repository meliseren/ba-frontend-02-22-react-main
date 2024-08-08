import axios from 'axios';
import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email, password) => {
        try {
            setIsLoading(true);
            const response = await axios(`${process.env.REACT_APP_BACKEND_URL}/users`);
            const users = response.data;
            const user = users.find(user => user.email === email && user.password === password);
            setIsLoading(false);
            if (user) {
                setUserData(user);
                console.log(user);
                return true;
            }
            else {
                setUserData(null);
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const logout = () => {
        setUserData(null);
    }

    const signup = async ({ email, password, fullName }) => {
        try {
            setIsLoading(true);
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/users`,
                {
                    email,
                    password,
                    fullName,
                }
            );
            setIsLoading(false);
            if (response.status === 201) {
                setUserData(response.data);
                return true;
            }
            else {
                setUserData(null);
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ userData, isLoading, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider