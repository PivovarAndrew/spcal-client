import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <a href="tel:+41555110825" className={styles.title}>Phone: +41 (0) 55 511 08 25</a>
            <Link to="/"><h1>SP</h1></Link>
            <ul>
                <li>News</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Header;
