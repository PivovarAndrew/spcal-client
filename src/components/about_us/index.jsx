import React from 'react';
import styles from './about_us.module.scss'

const AboutUs = () => {
    return (
        <>
            <h3>About Us</h3>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <p>We are a competent team that puts customer satisfaction first. Our experienced technicians have gained a great deal of technical understanding for repair, maintenance and calibration in the field of material testing, which is proven every time in use.</p>
                    <p>See for yourself!</p>
                </div>

                <div className={styles.textBlock}>
                    <p>We sell sensors of all kinds and machines in the field of material testing and measurement technology. We always offer a customer-satisfied solution!</p>
                    <p>Talk to our sales team!</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs;
