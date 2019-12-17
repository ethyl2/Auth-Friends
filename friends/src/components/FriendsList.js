import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm';


const FriendsList = props => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data);
            setLoading(false);
        })
        .catch(err=> console.log(err));
    }, []);

    const addFriend = newFriend => {
        setLoading(true);
        console.log(newFriend);
        axiosWithAuth().post('/friends', newFriend)
        .then(res => {
            console.log(res);
            setFriends(res.data);
            setLoading(false);
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Friends</h2>
            <AddFriendForm addFriend={addFriend}/>
            {loading && <p>Loading...</p>}
            {friends && friends.map(friend => {
                return (<div key={friend.id}>
                            <h3>{friend.name}</h3>
                            <p>{friend.age} Years Old</p>
                            <p>{friend.email}</p>
                        </div>)})}
        </div>
    );
};

export default FriendsList;