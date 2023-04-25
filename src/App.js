import './App.css';
import Layout from './routes/Layout';
import { useState } from "react";
import { Context } from './routes/Context';

function App() {
  const [isSignedIn, setLoggedIn] = useState(false)
  console.log(isSignedIn)
  return (
    <div className="App">
      <Context.Provider value={isSignedIn}>
        <h1>{`isSignedIn: ${isSignedIn}`}</h1>
        <Layout />
      </Context.Provider>

    </div>
  );
}

export default App;
