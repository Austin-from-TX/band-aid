import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../store/users';
import avatar from '../lib/avater1.png'

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
                        <Link to={`/users/${user.id}`}>
                        <div className='row 'style={{marginLeft: '400px'}}>
                          <div class="col s12 m8" key={user.id}>
                            <div class="card horizontal">
                            <div class="card-image">
                              <img src={avatar} className='circle responsive-img' alt="avatar" style={{height: '120px', width: '120px'}}></img>
                            </div>
                            <div class="card-stacked">
                              <div class="card-action">
                              <h5 >{user.username}</h5>
                              </div>
                              <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        </Link>
    
                    ))}
                </ul>
            </div>
        </> 

    );
}

export default SearchUsers;
