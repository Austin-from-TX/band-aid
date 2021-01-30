import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as trackActions from '../store/tracks'

function Tracks() {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const tracks = useSelector((state) => Object.values(state.tracks))

    useEffect(() => {
        dispatch(trackActions.getAllTracks(userId))
    }, [dispatch])
    
    
    return (
        <>
            <h3> Your Tracks </h3>
            <ul>
                {tracks.map(track => (
                    <li>
                        <a href={track.source}>{track.title}</a>
                    </li>
                ))}
            </ul>
                
                {/* <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></img></a>
                <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></img></a>
                <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></img></a>
                <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></img> </a> */}
            {/* {tracks.map(track => (track.source))
            } */}
        </>
    )
}

export default Tracks