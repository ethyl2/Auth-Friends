import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = ( props ) => {
    const [credentials, setCredentials] = useState({username: '', password: ''});
    const [loggingIn, setLoggingIn] = useState(false);

    const login = e => {
        e.preventDefault();
        setLoggingIn(true);
        console.log(credentials);
        axiosWithAuth().post('/login', credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            setLoggingIn(false);
            props.history.push("/friends");
        })
        .catch(err => console.log(err));
    }

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <h2>Log In</h2>
            {loggingIn && <p>Logging in...</p>}
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