import React from 'react';
import styles from './Navigation.module.scss';

function Navigation() {
    return (
        <>
            <div className={styles.navigationContainer}>
                <h1>What's the weather?</h1>
                <button>Dark mode</button>
            </div>
        </>
    );
}

export default Navigation;
