import React, { useEffect, useState } from 'react'
import styles from '../styles/styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getForecastDetails } from '../redux/action';

const ResultTable = () => {
    const dispatch = useDispatch()
    const { cityDetails } = useSelector((state) => state.cityDetails)
    const { forecastDetails } = useSelector((state) => state.forecastDetails)
    const [weatherDetails, setWeatherDetails] = useState({})

    const today = new Date()


    useEffect(() => {
        dispatch(getForecastDetails(cityDetails?.data[0]?.lat, cityDetails?.data[0]?.lon))
    }, [cityDetails])

    useEffect(() => {
        if (forecastDetails) {
            setWeatherDetails({
                date: today.getMonth() + '/' + today.getDay() + '/' + today.getFullYear(),
                temp: forecastDetails.data?.main.temp,
                desc: forecastDetails.data?.weather[0]?.description,
                main: forecastDetails.data?.weather[0]?.main,
                pressure: forecastDetails.data?.main?.pressure,
                humidity: forecastDetails.data?.main?.humidity
            })
        }
    }, [forecastDetails])

    return <div className={styles.result}>
        <table className={styles.resultTable}>
            <thead>
                <tr className={styles.date}>
                    <th >Date</th>
                    <th ></th>
                    <th ></th>
                    <th ></th>
                    <th ></th>
                    <th ></th>
                </tr>
                <tr>
                    <th>(mm/dd/yyyy)</th>
                    <th>Temp (F)</th>
                    <th>Decription</th>
                    <th>Main</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{weatherDetails.date}</td>
                    <td>{weatherDetails.temp}</td>
                    <td>{weatherDetails.desc}</td>
                    <td>{weatherDetails.main}</td>
                    <td>{weatherDetails.pressure}</td>
                    <td>{weatherDetails.humidity}</td>
                </tr>
            </tbody>
        </table>
    </div>
}
export default ResultTable