import * as types from './actionType'

const initialState = {
    user: {},
    isLogin: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER:
            return {
                ...state,
                user: action.payload,
                isLogin: true
            }
        default:
            return state
    }
}

export default userReducer