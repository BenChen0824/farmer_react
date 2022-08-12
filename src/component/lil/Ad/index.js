import React from 'react';
import styles from './Ad.module.css';
import clsx from 'clsx';

function Ad({ className }) {
    return (
        <img
            className={clsx(styles.img, className)}
            src="/images/Mesa de trabajo 1-100.jpg"
            alt=""
        />
    );
}
export default Ad;
