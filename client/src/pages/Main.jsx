import React, { useState, useEffect } from 'react';
import Buttons from '../components/buttons/Buttons';
import MapsContainer from '../components/Containers/MapsContainer';
import Temp from '../components/Containers/Temp';
import styles from './Main.module.scss';
function Main() {
    const [inputData, setInputData] = useState(() => {});
    const [weather, SetWeather] = useState(() => []);
    const [maps, setMaps] = useState(() => []);
    console.log(maps);

    const successCallback = async (position) => {
        setMaps({
            lon: position.coords.longitude,
            lat: position.coords.latitude,
        });
        try {
            const locationResponse = await fetch(
                `http://localhost:8080/api/weather/location?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            );
            const response = await locationResponse.json();
            SetWeather(response);

            return response;
        } catch (err) {
            console.log(err);
        }
        return null;
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            successCallback,
            errorCallback
        );
    }, []);

    useEffect(() => {
        const getDataByLocation = async () => {
            try {
                const locationResponse = await fetch(
                    `http://localhost:8080/api/weather/current?city=${weather.name}`
                );
                const response = await locationResponse.json();
                SetWeather(response);
                console.log(response);
            } catch (err) {
                console.log(err);
            }
        };
        getDataByLocation();
    }, []);

    const getAllData = async (event) => {
        event.preventDefault();
        try {
            const weatherResponse = await fetch(
                `http://localhost:8080/api/weather/current?city=${inputData.city}`
            );
            const weatherData = await weatherResponse.json();
            SetWeather(weatherData);
            setMaps({ lon: weatherData.coord.lon, lat: weatherData.coord.lat });
        } catch (err) {
            console.log(err);
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
            <Temp weather={weather} />
            <MapsContainer coordinates={maps} />
        </div>
    );
}

export default Main;
