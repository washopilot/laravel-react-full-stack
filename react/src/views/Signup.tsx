import React from 'react';
import { Link } from 'react-router-dom';

const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
};

const Signup = () => {
    return (
        <div className="login-signup-form animated fadeInDown ">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Signup for free</h1>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Password Confirmation" />
                    <button className="btn btn-block">Signup</button>
                </form>
                <p className="message">
                    Already Registred? <Link to={'/login'}>Sign in </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
