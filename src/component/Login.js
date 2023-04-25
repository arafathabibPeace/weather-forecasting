import React from "react";

const Login = () =>{
    const loginToGithub = () => {       
        window.location.assign('https://github.com/login/oauth/authorize?client_id=' + process.env.REACT_APP_CLIENT_ID);
    }
    return <div><button onClick={loginToGithub}>Login</button></div>
}

export default Login