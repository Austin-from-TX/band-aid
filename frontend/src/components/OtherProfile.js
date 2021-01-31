import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById } from '../store/users';
import TrackPlayer from './TrackPlayer';
import Tracks from './Tracks';

const OtherProfile = () => {
    const { userId } = useParams()
    const dispatch = useDispatch()

    console.log('----- in the profile -----', userId)
    
      useEffect(() => {
        dispatch(getUserById(userId))
    }, [dispatch])

    return (
        <>
          <TrackPlayer />
          <Tracks userId={userId}/>
        </>
    );
}

export default OtherProfile;
