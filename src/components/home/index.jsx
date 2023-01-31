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

            <div className={styles.productContainer}>
                <img src="images/calibrate.jpeg" alt={"Calibrate"} />

                <div className={styles.info}>
                    <div className={styles.name}>
                        <a href="#">Calibrate</a>
                    </div>

                    <p>ISO 17025 certified</p>
                    <p>Force calibration according to ISO 7500-1</p>
                    <p>Truss path and extensiometer calibration</p>

                    <button type="button">What is calibration?</button>
                </div>
            </div>

            <section>
                <p>SP Calibration Suisse performs calibrations on universal tensile and compression testing machines. We repair and maintain testing machines and then create a calibration certificate according to the standard.</p>
            </section>

            <div className={styles.textBlock}>
                <h3>Calibration laboratory at SP Calibration Suisse</h3>
                <p>We offer in-house calibrations of force and displacement sensors.</p>
            </div>

            <div className={styles.textBlock}>
                <h3>On-site calibrations</h3>
                <p>We have the possibility to carry out a calibration within Switzerland by our trained personnel.</p>
            </div>

            <h3>An interplay</h3>

            <div className={styles.group}>
                <section>
                    <p>Repair</p>
                </section>

                <section>
                    <p>Preventive maintenance</p>
                </section>
            </div>

            <p>We make repairs of hydraulic and mechanical test presses, testing machines and accessories.</p>

            <Link to="/contact"><button type="button">Start inquiry.</button></Link>

            <div className={styles.textBlock}>
                <p>Have the presses / testing machines to be calibrated already stopped during calibration or before? Then we are here for you. Thanks to our competent team, we are able to solve almost any problem on site with our expertise and years of experience.</p>
            </div>

            <h3>Sale</h3>

            <div className={styles.group}>
                <img src="images/pic1.png" alt="pic1" />
                <img src="images/pic2.png" alt="pic2" />
            </div>
        </div>
    )
}

export default Home;
