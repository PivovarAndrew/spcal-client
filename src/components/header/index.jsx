import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return (
        <nav>
            <a href="tel:+41555110825" className={styles.title}>Phone: +41 (0) 55 511 08 25</a>
            <a href="/"><h1>SP</h1></a>
            <ul>
                <li>News</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Header;
