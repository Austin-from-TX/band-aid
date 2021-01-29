const SET_TRACKS = 'tracks/setTracks'

const setTracks = (tracks) => ({
    type: SET_TRACKS,
    payload: tracks
})

export const getAllTracks = () => async (dispatch) => {
    const res = await fetch('api/tracks', {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json"
        },

    })

    const tracks = await res.json()
    dispatch(setTracks(tracks))    
}

const initialState = {  }

function tracksReducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_TRACKS:
            newState = Object.assign({}, state, action.payload)
            return newState
        default:
            return initialState
    }

}

export default tracksReducer