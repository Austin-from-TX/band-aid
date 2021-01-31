import Banner from './Banner';
import Tracks from './Tracks'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import TrackPlayer from './TrackPlayer';
import { Redirect, useParams } from 'react-router-dom'
import Mp3Recorder from './MP3Recorder';

function UserProfile(){
    const dispatch = useDispatch()
    const {userId} = useParams()
    const user = useSelector(state => state.session.user)
    
    // TODO render profile name based on userId 
    // useEffect(() => {
    //     dispatch(getUserById(userId))
    // }, [dispatch, userId])
       
    if(!user) return <Redirect to='/' />
        return (
        <>
            <Banner />
            <div class="row">
                <div class="col s12 m7 right ">
                <div class="card">
                    <div class="card-content">
                        <b>My Influences</b>
                    <p>Radiohead, Sigur Ros, Modest Mouse, Bonobo, They Might Be Giants, Cake, Moderat, Tame Impala, The Beatles, Bob Moses,
                        Sigmund Freud (a.k.a. 'fr00d d00d'), Ratatat, My Morning Jacket, Duologue, Squarepusher, Flying Lotus
                    </p>
                    </div>
                    <div className='col s5 right' style={{marginTop: '60px', marginLeft: '200px'}}>
                        <h6><b>Click Playlist Below To Listen to My Tracks </b></h6>
                    </div>
                </div>
                </div>
                <div class="col s5 left">,
                    <h4 style={{marginLeft: '60px', marginTop: '-20px'}}>{user.username}</h4>
                    <Tracks userId={userId}/>
                        {Number(user.id) === Number(userId) ?
                            <>
                                <p>Have an inkling for a song? Record it here! Once finished, click the three<br />
                                dots to download the track and then upload it here to share with others!</p>
                              <Mp3Recorder />
                              <TrackPlayer />
                            </> :
                            <TrackPlayer />
                        }
                </div>
            </div>
                 
            
            
            
        </>
    )
}

export default UserProfile