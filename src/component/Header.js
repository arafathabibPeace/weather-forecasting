import React, { useEffect, useState } from 'react';
import styles from '../styles/styles.module.css'
import Logout from './Logout';

const Header = () => {
    return <div className={styles.header}>
        <i class='fa fa-cloud icon w3-jumbo' />
        <div className={styles.title}>Weather Forecast</div>
        <div className={styles.logoutDiv}><Logout /></div>
    </div>
}

export default Header