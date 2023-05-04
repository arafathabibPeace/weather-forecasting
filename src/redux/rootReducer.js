import { combineReducers } from 'redux'
import userDetailsReducer from './userDetailsReducer'
import cityDetailsReducer from './cityDetailsReducer'
import forecastDetailsReducer from './forecastDetailsReducer'
import accessTokenReducer from './accessTokenReducer'
import codeParam from './codeParamReducer'

const rootReducer = combineReducers({
    codeParam:codeParam,
    accessToken: accessTokenReducer,
    userDetails: userDetailsReducer,
    cityDetails: cityDetailsReducer,
    forecastDetails: forecastDetailsReducer,


})


export default rootReducer