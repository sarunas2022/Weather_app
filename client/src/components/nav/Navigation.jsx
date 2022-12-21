import React from 'react';
import styles from './Navigation.module.scss';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function Navigation() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.navigationContainer}>
                    <div className={styles.logo}>
                        <WbSunnyIcon
                            sx={{
                                color: 'yellow',
                                fontSize: '3rem',
                                animation: 'spin 6s linear infinite',
                                '@keyframes spin': {
                                    '0%': {
                                        transform: 'rotate(360deg)',
                                    },
                                    '100%': {
                                        transform: 'rotate(0deg)',
                                    },
                                },
                            }}
                        />
                    </div>
                    <h1>What's the weather?</h1>
                </div>
            </div>
        </>
    );
}

export default Navigation;
