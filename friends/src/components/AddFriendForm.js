import React, { useState, useEffect } from 'react';

const AddFriendForm = props => {
    const [friend, setFriend] = useState({name: '', age: '', email: ''});
    
    useEffect(()=> {
        if (props.friendToEdit) {
            setFriend(props.friendToEdit);
        }
    }, [props.friendToEdit]);

    const handleSubmit = e => {
        e.preventDefault();
        if (props.friendToEdit) {
            props.finishEdit(friend);
        } else {
            props.addFriend(friend);
        }
        setFriend({name: '', age: '', email: ''});
    }

    const handleChange = e => {
        setFriend({...friend, [e.target.name]: e.target.value});
    }

    return (
        <div>
            {!props.friendToEdit && <h3>Add Friend</h3>}
            {props.friendToEdit && <h3>Edit Friend</h3>}
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value={friend.name} onChange={handleChange} />
                
                <label htmlFor='age'>Age: </label>
                <input type='text' name='age' value={friend.age} onChange={handleChange} />
                
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' value={friend.email} onChange={handleChange} />
                <button type='submit'>
                    {props.friendToEdit? 'Edit Friend': 'Add Friend'}</button>
            </form>
        </div>
    )
}

export default AddFriendForm;