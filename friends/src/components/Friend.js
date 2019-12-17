import React from 'react';

const Friend = ({ friend, deleteFriend, editFriend }) => {

    const handleDeleteClick = () => {
        //console.log(friend);
        deleteFriend(friend);
    }

    const handleEditClick = () => {
        editFriend(friend);
    }

    return (
        <div>
            <h3>{friend.name}</h3>
            <p>{friend.age} Years Old</p>
            <p>{friend.email}</p>
            <button onClick={handleDeleteClick}>X</button>
            <button onClick={handleEditClick}>Edit</button>
        </div>  
    )
}

export default Friend;