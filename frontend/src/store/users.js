

const initialState = {}

const GET_USERS = 'users/getUsers'

const GET_NAME = 'users/getUserName'


const getUserName = (userName) => ({
    type: GET_NAME, 
    payload: userName
})

const getUsers = (users) => ({
    type: GET_USERS,
    payload: users
})

export const getAllUsers = () =>  async (dispatch) => {
    const res = await fetch('/api/users', {})

    const users = await res.json()
    dispatch(getUsers(users))    
}

export const getUserById = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`, {})

    const userName = await res.json()
    dispatch(getUserName(userName))
    
}

function usersReducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_USERS:
            newState = Object.assign({}, state, action.payload)
            return newState
        case GET_NAME:
            newState = Object.assign({}, state, action.payload)
            return newState
        default:
            return initialState
    }

}

export default usersReducer