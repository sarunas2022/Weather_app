import styles from './Temp.module.scss';
import { CircularProgress } from '@mui/material';

// function returning circular  spinner
const whileLoading = (
    <div className={styles.loader}>
        <CircularProgress sx={{ color: '#ac3b61' }} />
    </div>
);

function Temp(props) {
    // console.log(props.status);
    if (props.status === 'loading') {
        return whileLoading;
    }

    if (props.weather.length === 0) {
        return (
            <>
                <div className={styles.error}></div>
            </>
        );
    }
    if (props.weather.message) {
        return (
            <>
                <div className={styles.error}>
                    <h1>
                        Sorry, we could't find the location you searching for
                    </h1>
                </div>
            </>
        );
    } else {
        const data = props.weather;
        const CurrentTemp = Math.round(data.main.temp);
        const feelsLike = Math.round(data.main.feels_like);
        return (
            <div className={styles.container}>
                <div className={styles.output}>
                    <div className={styles.main}>
                        <h1 className={styles.name}> {data.name} </h1>
                        <h1>{CurrentTemp} °C</h1>
                    </div>
                    <div className={styles.secondary}>
                        <p>Feels like {feelsLike} °C</p>
                        <p>{data.weather[0].description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Temp;
