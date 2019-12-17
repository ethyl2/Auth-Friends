import React, { useState } from 'react';

const AddFriendForm = props => {
    const [friend, setFriend] = useState({name: '', age: '', email: ''});

    const handleSubmit = e => {
        e.preventDefault();
        props.addFriend(friend);
    }

    const handleChange = e => {
        setFriend({...friend, [e.target.name]: e.target.value});
    }

    return (
        <div><h3>Add Friend</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value={friend.name} onChange={handleChange} />
                
                <label htmlFor='age'>Age: </label>
                <input type='text' name='age' value={friend.age} onChange={handleChange} />
                
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' value={friend.email} onChange={handleChange} />
                <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriendForm;