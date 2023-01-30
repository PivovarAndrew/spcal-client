import React from 'react';
import styles from './home.module.scss';
import logo from 'logo.svg';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Strong in service</h1>
                <h1>More service, more security</h1>
            </div>

            <div className={styles.subNav}>
                    <div className={styles.container}>
                        <div className={styles.title}>
                            <h1>SP</h1> <h2>Calibration Suisse</h2>
                        </div>

                        <img src={logo} alt="logo"></img>
                    </div>
            </div>
        </div>
    )
}

export default Home;
