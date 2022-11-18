import React from 'react';
import styles from './Button.module.scss';

export default function Buttons(props) {
    return <button className={styles.button}>{props.text}</button>;
}
