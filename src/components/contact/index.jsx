import React from 'react';
import styles from './contact.module.scss';

const Contact = () => {
    return (
        <>
            <h3>Contact</h3>
            <div className={styles.container}>
                <div className={styles.inputForm}>
                    <input type="hidden" name="_token" value="{{ csrf_token() }}" />

                    <div className={styles.inputGroup}>
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Enter your name" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label for="company">Company</label>
                        <input type="text" name="company" placeholder="Enter your company name" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label for="comment">Comment</label>
                        <textarea type="text" name="comment" placeholder="Leave a comment" />
                    </div>

                    <button type="submit" name="submit" id="send">Send</button>
                </div>

                <div className={styles.mapContainer}>
                    <div className={styles.info}>
                        <p>SP Calibration Suisse GmbH</p>
                        <p>Churerstrasse 47</p>
                        <p>8808 Pfäffikon SZ</p>
                        <a href="tel:+41555110825"><p>+41 (0) 55 511 08 25</p></a>
                        <a href="mailto:info@spcal.ch"><p>info@spcal.ch</p></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
