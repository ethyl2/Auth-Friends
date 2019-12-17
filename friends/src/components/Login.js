import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
    const [credentials, setCredentials] = useState({username: '', password: ''});
    const [loggingIn, setLoggingIn] = useState(false);

    const login = e => {
        e.preventDefault();
        console.log(credentials);
        axiosWithAuth().post('/login', credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
        })
        .catch(err => console.log(err));
    }

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={login}>
                <label htmlFor='username'>Username: </label>
                <input type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />

                <label htmlFor='password'>Password: </label>
                <input type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
}

export default Login;