import { useEffect } from 'react';
import Banner from './Banner';
import Tracks from './Tracks'
import {useSelector} from 'react-redux'

function UserProfile(){

    const user = useSelector(state => state.session.user)
    console.log(user)

        return (
        <div>
            <Banner />
            <Tracks />
            
        </div>
    )
}

export default UserProfile