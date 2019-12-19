import React, { useState } from 'react';

const Friend = ({ friend, deleteFriend, editFriend }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [friendToEdit, setFriendToEdit] = useState(friend);

    const handleDeleteClick = () => {
        //console.log(friend);
        deleteFriend(friend);
    }

    const handleEditClick = () => {
        setIsEditing(true);  
    }

    const handleSubmit = e => {
        e.preventDefault();
        editFriend(friendToEdit);
        setIsEditing(false);
    }

    const handleChange = e => {
        setFriendToEdit({...friendToEdit, [e.target.name]: e.target.value})
    }

    return (
        <div className='friendBox'>
            <h3>{friend.name}</h3>
            <p>{friend.age} Years Old</p>
            <p>{friend.email}</p>
            <button className='delete' onClick={handleDeleteClick}><span role="img" aria-label="skull">🕱</span></button>
            <button className='edit' onClick={handleEditClick}><span role="img" aria-label="skull">✏️</span></button>

            {isEditing && <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' value={friendToEdit.name} onChange={handleChange} />
                
                <label htmlFor='age'>Age: </label>
                <input type='number' name='age' value={friendToEdit.age} onChange={handleChange} />
                
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' value={friendToEdit.email} onChange={handleChange} />
                <button type='submit'>Edit Friend</button>
            </form>}

        </div>  
    )
}

export default Friend;