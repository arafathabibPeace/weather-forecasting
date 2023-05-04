import React, { useEffect, useState } from 'react';
import styles from '../styles/styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCityDetails, getForecastDetails } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    let dispatch = useDispatch()
    const navigate = useNavigate();
    const { cityDetails } = useSelector((state) => state.cityDetails)
    const [searchTerm, setSearchTerm] = useState('');
    const { userDetails } = useSelector((state) => state.userDetails)
    const [error, setError] = useState('')
    const handleChange = (event) => {
        event.preventDefault();
        setError('')
        setSearchTerm(event.target.value);

    };

    const submitHandler = (e) => {
        e.preventDefault()
        if (searchTerm) {
            dispatch(getCityDetails(searchTerm))
            navigate('/weather', { replace: false });
        } else {
            setError('Please enter the name of the city')
        }

    }

    useEffect(() => {
        if (cityDetails) {
            dispatch(getForecastDetails(cityDetails?.data[0]?.lat, cityDetails?.data[0]?.lon))
        }
    }, [cityDetails, dispatch])

    return <div className={styles.content}>
        <div className={styles.user_name}><h1>{userDetails}</h1></div>
        <form>
            <div className={styles.inputcontainer}>
                <i className={styles.icon} class='fa fa-search w3-xlarge' />
                <input className={styles.inputfield} type='text' placeholder='City' name='city' onChange={e => handleChange(e)} />
                <label className={styles.errorLabel}>{error}</label>
            </div>
            <button className={styles.button} onClick={submitHandler}>Display Weather</button>
        </form>
    </div>
}

export default Search