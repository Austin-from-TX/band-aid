
const GET_TRACKS = 'tracks/getTracks'


const getTracks = (tracks) => ({
    type: GET_TRACKS,
    payload: tracks
})

export const getAllTracks = (userId) => async (dispatch) => {
       
    const res = await fetch(`/api/tracks/users/${userId}`, {
    })

    const tracks = await res.json()
    dispatch(getTracks(tracks))    
}



const initialState = {  }

function tracksReducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_TRACKS:
            newState = Object.assign({}, state, action.payload)
            return newState

        default:
            return initialState
    }

}

export default tracksReducer