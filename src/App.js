import './App.css';
import Layout from './routes/Layout';
import { useEffect, useState } from "react";
import { Context } from './routes/Context';

function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString)
  const codeParam = urlParams.get('code')
  console.log(codeParam);

  const [accessToken, setAccessToken] = useState('')
  const [isSignedIn, setLoggedIn] = useState(false)
  console.log(isSignedIn)


  useEffect(() => {
    if(codeParam && accessToken === ''){
      
      console.log(urlParams,codeParam)

    }else{
      
    }
  },[])

  return (
    <div className="App">
      <Context.Provider value={isSignedIn}>
        <Layout />
      </Context.Provider>

    </div>
  );
}

export default App;
