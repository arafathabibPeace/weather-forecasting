import React from 'react';
import Login from '../component/Login'
import Header from '../component/Header';
import styles from '../styles/styles.module.css'
const Landing = () => {
    return <div><Header />

        <div className={styles.content}>
            <div className={styles.welcome}>Welcome to the weather forecast web application. Please Login with your  Github  user  to use the application and view the weather  in your city
                <div className={styles.loginDiv}><Login /></div>
            </div>
        </div>
    </div>
}

export default Landing