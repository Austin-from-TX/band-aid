import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import * as trackActions from '../store/tracks'

function Tracks({ userId }) {
    const dispatch = useDispatch()
    const tracks = useSelector((state) => Object.values(state.tracks))

    useEffect(() => {
        dispatch(trackActions.getAllTracks(userId))
    }, [dispatch, userId])
    
    
    return (
        <>
            <h5 style={{marginLeft: '50px'}}>{`${tracks.length} Tracks Available`} </h5>
        </>
    )
}

export default Tracks