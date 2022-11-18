import React from 'react';
import styles from './ForecastCard.module.scss';

export default function ForecastCard(props) {
    if (props.forecast.length === 0) {
        return (
            <>
                <div></div>
            </>
        );
    } else {
        const days = props.forecast.list;
        console.log(days);
        return (
            <div className={styles.cardWrapper}>
                {days.map((day) => {
                    return (
                        <div key={day.dt} className={styles.card}>
                            <div className='day'>
                                <p>{day.dt_txt}</p>
                                <p>{day.main.temp}</p>
                                <p>{day.weather[0].description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
