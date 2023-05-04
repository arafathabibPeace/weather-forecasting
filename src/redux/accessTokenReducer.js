import * as types from './actionType'

const initialState = {
    accessToken: ''
}

const accessTokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload,
            }
        default:
            return state
    }
}

export default accessTokenReducer