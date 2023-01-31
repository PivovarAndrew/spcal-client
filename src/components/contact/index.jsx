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
            </div>
        </>
    )
}

export default Contact;
