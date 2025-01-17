import React, { useState } from 'react';

const AddFriendForm = props => {
    const [friend, setFriend] = useState({name: '', age: '', email: ''});

    const handleSubmit = e => {
        e.preventDefault();
        props.addFriend(friend);
        setFriend({name: '', age: '', email: ''});
    }

    const handleChange = e => {
        setFriend({...friend, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value={friend.name} onChange={handleChange} />
                
                <label htmlFor='age'>Age: </label>
                <input type='number' name='age' value={friend.age} onChange={handleChange} />
                
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' value={friend.email} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddFriendForm;