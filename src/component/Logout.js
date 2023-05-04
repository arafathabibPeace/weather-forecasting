import React from 'react';
import styles from '../styles/styles.module.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
const Logout = () => {
    const { codeParam } = useSelector((state) => state.codeParam)
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        document.location.reload();
        window.location.assign('/')
        navigate('/', { replace: true });

    }

    return <div>
       {codeParam?<button onClick={logoutHandler} className={styles.button}>Logout</button>:''}
    </div>
}

export default Logout