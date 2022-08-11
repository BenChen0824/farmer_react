import React from 'react';
import styles from './Ad.module.css';
function Ad() {
    return (
        <div className={styles.hidden_box}>
            <div className={styles.wrap}>
                <img src="images/Mesa de trabajo 1-100.jpg" alt="" />
            </div>
        </div>
    );
}
export default Ad;
