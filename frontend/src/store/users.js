

const initialState = {}

const GET_USERS = 'users/getUsers'


const getUsers = (users) => ({
    type: GET_USERS,
    payload: users
})

export const getAllUsers = () =>  async (dispatch) => {
    const res = await fetch('/api/users', {})

    const users = await res.json()
    dispatch(getUsers(users))    
}

export const getUserById = () => async (dispatch) => {
    
}

function usersReducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_USERS:
            newState = Object.assign({}, state, action.payload)
            return newState

        default:
            return initialState
    }

}

export default usersReducer