import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <footer>
                <p>© 2022 Šarūnas Grabauskas</p>
            </footer>
        </div>
    );
}
