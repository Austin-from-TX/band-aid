import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../store/users';

const SearchUsers = () => {

    const dispatch = useDispatch()
    const userList = useSelector(state => Object.values(state.users))
    // const [searchWord, setSearchWord] = useState('')
    // const [filter, setFilter] = useState([])

    
    useEffect(() => {

        dispatch(getAllUsers())
    }, [dispatch])

    // useEffect(() => {
    //     setFilter(
    //         userList.filter(user => {
    //            return user.username.toLowerCase().includes(searchWord.toLowerCase())})
    //     )
    //     }, [searchWord, userList])

    return (
        <>
            
            <div>
                <ul>
                    {userList.map(user => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.username}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </> 

    );
}

export default SearchUsers;
