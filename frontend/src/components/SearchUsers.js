import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
                            <a href={`/users/${user.id}`}>{user.username}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </> 

    );
}

export default SearchUsers;
