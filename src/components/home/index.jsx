import React from 'react';
import styles from './home.module.scss';
import logo from 'logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Strong in service</h1>
                <h1>More service, more security</h1>
            </div>

            <div className={styles.group}>
                <section>
                    <p>Customer satisfaction is our top priority!</p>
                </section>

                <section>
                    <p>That's why we are so well known for our professional service.</p>
                </section>
            </div>

            <div className={styles.subNav}>
                <Link to="/">
                    <div className={styles.container}>
                        <div className={styles.title}>
                            <h1>SP</h1> <h2>Calibration Suisse</h2>
                        </div>

                        <img src={logo} alt="logo"></img>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home;
