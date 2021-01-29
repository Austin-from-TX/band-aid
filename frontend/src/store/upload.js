import { useDispatch } from 'react-redux'
import { fetch } from './csrf'



const SET_TRACK = 'upload/setTrack'

const setTrack = (track) => ({
    type: SET_TRACK,
    payload: track,
})

export const createTrack = (trackFile) => async (dispatch) => {
    
    const { tracks, track, bandName, title, userId } = trackFile
    const formData = new FormData();
    formData.append('userId', userId)
    formData.append('bandName', bandName)
    formData.append('title', title)
    
    //for single track
    if (track) formData.append('track', track)

    //for multiple tracks
    if (tracks && tracks.length !== 0) {
        for (let i = 0; i < tracks.length; i++) {
            formData.append('tracks', tracks[i]);
        }
    }

    const res = await fetch('/api/tracks', {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: formData,
    })

     dispatch(setTrack(res.data.trackFile))
     return res.data.trackFile
}



const initialState = { track: null }

const uploadReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_TRACK:
            newState = Object.assign({}, state);
            newState.track = action.payload;
            return newState;
        default:
            return state;
    }
}

export default uploadReducer