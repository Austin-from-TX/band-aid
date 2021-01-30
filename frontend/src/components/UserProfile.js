import { useEffect } from 'react';
import Banner from './Banner';
import Tracks from './Tracks'
import {useSelector} from 'react-redux'
import TrackPlayer from './TrackPlayer';
import { Redirect } from 'react-router-dom'

function UserProfile(){

    const user = useSelector(state => state.session.user)
    
    if(!user) return <Redirect to='/' />
        return (
        <div>
            <Banner />
            <TrackPlayer />
            <Tracks />
            
        </div>
    )
}

export default UserProfile