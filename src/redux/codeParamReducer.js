import * as types from './actionType'

const initialState = {
    codeParam: ''
}

const codeParam = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CODE_PARAM:
            return {
                ...state,
                codeParam: action.payload,
            }
        default:
            return state
    }
}

export default codeParam