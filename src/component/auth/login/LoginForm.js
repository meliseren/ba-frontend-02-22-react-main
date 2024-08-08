import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/auth/AuthContext';

const LoginForm = ({ children }) => {

    const navigate = useNavigate();

    const { isLoading, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        if (email && password) {
            setEmailErr(false);
            setPasswordErr(false);
            const isLoggedIn = await login(email, password);
            if (isLoggedIn) {
                navigate("/");
            }
        }
        else {
            setEmailErr(true);
            setPasswordErr(true);
        }
    }

    return (
        <form className="student-form">
            {children}
            <div className="form-control">
                <input
                    type="text"
                    placeholder='Your email...'
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    value={email}
                />
                {emailErr && <p className="input-err">Email cannot be empty!</p>}
            </div>
            <div className="form-control">
                <input
                    type="password"
                    placeholder='Password...'
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    value={password}
                />
                {passwordErr && <p className="input-err">Password cannot be empty!</p>}
            </div>
            <button
                onClick={handleLogin}
                className="btn btn-primary"
                disabled={isLoading}
            >
                {isLoading ? "Loading..." : "Login"}
            </button>
            <p><Link to="/sign-up">Click here</Link> to sign up!</p>
        </form>
    )
}

export default LoginForm