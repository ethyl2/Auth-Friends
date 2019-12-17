import React from 'react';
import { tsPropertySignature } from '@babel/types';


const Friend = ({ friend, deleteFriend }) => {

    const handleClick = () => {
        //console.log(friend);
        deleteFriend(friend);
    }

    return (
        <div>
            <h3>{friend.name}</h3>
            <p>{friend.age} Years Old</p>
            <p>{friend.email}</p>
            <button onClick={handleClick}>X</button>
        </div>  
    )
}

export default Friend;