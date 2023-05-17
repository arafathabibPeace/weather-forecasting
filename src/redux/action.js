import * as types from './actionType'
import axios from 'axios'

const setCodeParam = (isSignedIn) => ({
    type: types.GET_CODE_PARAM,
    payload: isSignedIn
})

const setAccessToken=(access_token)=>({
    type: types.GET_ACCESS_TOKEN,
    payload: access_token
})


const setUserDetails = (name) => ({
    type: types.GET_USER_DETAILS,
    payload: name
})

const setCityDetails = (cityDetails) => ({
    type: types.GET_CITY_DETAILS,
    payload: cityDetails
})

const setForecastDetails = (forecastDetails) => ({
    type: types.GET_FORECAST_DETAILS,
    payload: forecastDetails
})

export const getCodeParam = (codeParam) => {
    return (dispatch) => { dispatch(setCodeParam(codeParam)) }
}

export const get_access_token = (code) => {
    return (dispatch) => {
        axios.get('http://localhost:4000/getAccessToken?code=' + code)
            .then((res) => {
                dispatch(setAccessToken(res?.data?.access_token))
            })
    }
}

export const getUserDetails = (accessToken) => {
    return function (dispatch) {
        axios.get('http://localhost:4000/getUserData', {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then((res) => {
            dispatch(setUserDetails(res.data?.name))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const getCityDetails = (city) => {
    return function (dispatch) {
        axios.get('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
            .then((res) => {
                dispatch(setCityDetails(res))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getForecastDetails = (lat, lon) => {
    return function (dispatch) {
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
            .then((res) => {
                dispatch(setForecastDetails(res))
            }).catch((err) => {
                console.log(err)
            })
    }
}



