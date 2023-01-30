import React from 'react';
import styles from './home.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Strong in service</h1>
                <h1>More service, more security</h1>
            </div>
        </div>
    )
}

export default Home;
