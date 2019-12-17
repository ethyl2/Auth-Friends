import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm';
import Friend from './Friend';


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

    const deleteFriend = friend => {
        setLoading(true);
        console.log(friend);
        axiosWithAuth().delete(`/friends/${friend.id}`)
            .then(res => {
                console.log(res);
                setFriends(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }

    const editFriend = friend => {
        console.log('Time to edit friend');
        console.log(friend);
        
        setLoading(true);
        axiosWithAuth().put(`/friends/${friend.id}`, friend)
            .then(res=> {
                console.log(res);
                setFriends(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
            
    }

    return (
        <div>
            <h2>Friends</h2>
            <AddFriendForm addFriend={addFriend}/>
            {loading && <p>Loading...</p>}
            {friends && friends.map(friend => {
                return (<Friend key={friend.id} friend={friend} deleteFriend={deleteFriend} editFriend={editFriend}/>)})}
        </div>
    );
};

export default FriendsList;