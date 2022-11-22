import React, { useState } from 'react';
import Buttons from '../components/buttons/Buttons';
import MapsContainer from '../components/Containers/MapsContainer';
import Temp from '../components/Containers/Temp';
import styles from './Main.module.scss';
function Main() {
    const [inputData, setInputData] = useState(() => {});
    const [weather, SetWeather] = useState(() => []);
    const [maps, setMaps] = useState(() => []);

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
            {/* <ForecastCard forecast={forecast} /> */}
            <MapsContainer coordinates={maps} />
        </div>
    );
}

export default Main;
