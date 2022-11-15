import React, { useState, useEffect } from 'react';
import MapsContainer from '../components/Containers/MapsContainer';
import Temp from '../components/Containers/Temp';
import styles from './Main.module.scss';
function Main() {
    const [inputData, setInputData] = useState(() => {});
    const [weatherData, SetWeatherData] = useState(() => []);
    console.log(weatherData);
    const [forecastData, setForecastData] = useState(() => {});

    useEffect(() => {
        console.log('render');
    }, [weatherData, forecastData]);

    const fetchForecast = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:8080/api/weather/5_days?city=${inputData.city}`
            );
            const data = await response.json();
            setForecastData(data);
            console.log(forecastData);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchWeather = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:8080/api/weather/current?city=${inputData.city}`
            );
            const data = await response.json();
            SetWeatherData(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className={styles.formContainer}>
                <form onSubmit={fetchWeather}>
                    <input
                        onChange={(event) =>
                            setInputData((prev) => ({
                                ...prev,
                                city: event.target.value,
                            }))
                        }
                        type='text'
                        placeholder='Enter city name'
                    />
                    <button type='submit'>Find</button>
                </form>
            </div>
            <Temp weather={weatherData} />
            {/* <MapsContainer forecast={forecastData} /> */}
        </>
    );
}

export default Main;
