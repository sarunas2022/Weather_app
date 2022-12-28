import React, { useState, useEffect } from 'react';
import Buttons from '../components/buttons/Buttons';
import MapsContainer from '../components/Containers/MapsContainer';
import Temp from '../components/Containers/Temp';
import styles from './Main.module.scss';
import { CircularProgress } from '@mui/material';

function Main() {
    // Setting states for Input, weather data and location data
    const [inputData, setInputData] = useState(() => {});
    const [weather, SetWeather] = useState(() => []);
    const [maps, setMaps] = useState(() => []);

    // setting state for status to load to display spinner while data is loading
    const [status, setStatus] = useState('idle');

    // circular loading to be displayed if status is 'loading'
    const whileLoading = (
        <div className={styles.loader}>
            <CircularProgress sx={{ color: '#ac3b61' }} />
        </div>
    );
    // if geolocation is successful using lon and lat to setMaps and fetch data from openWeatherMap api

    const successCallback = async (position) => {
        setMaps({
            lon: position.coords.longitude,
            lat: position.coords.latitude,
        });
        try {
            setStatus('loading');
            const locationResponse = await fetch(
                `https://sg-weathermap-server.onrender.com/api/weather/location?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const response = await locationResponse.json();
            // setting weather data from response
            SetWeather(response);
            setStatus('fulfilled');
            return response;
        } catch (err) {
            console.log(err);
            setStatus('rejected');
        }
        return null;
    };
    // if geolocation is unsuccessful returning error
    const errorCallback = (error) => {
        console.log(error);
    };
    // asking for geolocation data form the user
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            successCallback,
            errorCallback
        );
    }, []);

    // getting and rendering data after input submitted
    const getAllData = async (event) => {
        event.preventDefault();
        setStatus('loading');
        try {
            const weatherResponse = await fetch(
                `https://sg-weathermap-server.onrender.com/api/weather/current?city=${inputData.city}`
            );
            const weatherData = await weatherResponse.json();
            SetWeather(weatherData);
            setMaps({ lon: weatherData.coord.lon, lat: weatherData.coord.lat });
            setStatus('fulfilled');
        } catch (err) {
            console.log(err);
            setStatus('rejected');
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.formContainer}>
                <form onSubmit={getAllData}>
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
                    <Buttons text='Find' type='submit' />
                </form>
            </div>
            {/* passing down weather data and status to Temp component */}
            {status === 'loading' && whileLoading}
            <Temp weather={weather} status={status} />
            <MapsContainer coordinates={maps} />
        </div>
    );
}

export default Main;
