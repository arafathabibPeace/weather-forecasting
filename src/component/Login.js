import React from 'react';
import styles from '../styles/styles.module.css'
import { useSelector } from 'react-redux'
const Login = () => {

    const { codeParam } = useSelector((state) => state.codeParam)
    const loginToGithub = () => {
        window.location.assign('https://github.com/login/oauth/authorize?client_id=' + process.env.REACT_APP_CLIENT_ID);
    }

    return <div>
        {!codeParam ? <button onClick={loginToGithub} className={styles.button}>Login</button> : '' }
    </div>
}

export default Login