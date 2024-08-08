import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignupForm = ({ children }) => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordValidation] = useState("");

    const [fullNameErr, setFullnameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);


    return (
        <form className="student-form">
            {children}
            <div className="form-control">
                <input
                    type="text"
                    placeholder='Your full name...'
                    onChange={(event) => {
                        setFullname(event.target.value);
                    }}
                    value={fullname}
                />
                {fullNameErr && <p className="input-err">Student name cannot be empty!</p>}
            </div>
            <div className="form-control">
                <input
                    type="text"
                    placeholder='Your email address...'
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    value={email}
                />
                {emailErr && <p className="input-err">Student name cannot be empty!</p>}
            </div>
            <div className="form-control">
                <input
                    type="text"
                    placeholder='Password...'
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    value={password}
                />
                {passwordErr && <p className="input-err">Instructor name cannot be empty!</p>}
            </div>
            <div className="form-control">
                <input
                    type="text"
                    placeholder='Password Validation...'
                    onChange={(event) => {
                        setPasswordValidation(event.target.value);
                    }}
                    value={passwordConfirm}
                />
                {passwordErr && <p className="input-err">Instructor name cannot be empty!</p>}
            </div>
            <button className="btn btn-primary">Login</button>
            <p><Link to="/login">Click here</Link> if you already have an account!</p>
        </form>
    )
}

export default SignupForm