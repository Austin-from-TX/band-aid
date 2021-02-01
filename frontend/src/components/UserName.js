import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../store/users';

const UserName = ({userId}) => {
    const dispatch= useDispatch()

    const user = useSelector(state => state.users.username)
   

    useEffect(() => {
        dispatch(getUserById(userId))
    }, [dispatch, userId])

    return (
        <div>
            <h4>{user}</h4>
        </div>
    );
}

export default UserName;
