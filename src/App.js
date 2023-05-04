import './App.css';
import Router from './routes/Router';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getCodeParam, getUserDetails, get_access_token } from "../src/redux/action";

const App = () => {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.accessToken)

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const codeParam = urlParams.get('code')
  
    if (codeParam) {
      dispatch(getCodeParam(codeParam))
      if (!accessToken) {
        dispatch(get_access_token(codeParam))
      }
    }
  }, [accessToken,dispatch])

  useEffect(()=>{

    if(accessToken){
      dispatch(getUserDetails(accessToken))
    }
  },[accessToken,dispatch])

  return (
    <div className="App">
        <Router />
    </div>
  );
}

export default App;
