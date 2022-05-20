import React from "react";
import { Link } from "react-router-dom";
import logo from '../../public/atelier-1.png';
import styles from "./Footer.module.css";

export default function Footer() {
    return (
    <footer className={styles.Footer}>
        <div className={styles.footerLogo}>
            <img src={logo} style={{ width: '8rem' }} id="logo" alt="footer logo"></img>
            <ul style={{ padding: '0', margin: '5px' }}>
                <li key="1" style={{ padding: '0' }}>
                <i key="5" className="fa-brands fa-twitter"></i>
                </li>
                <li key="2">
                <i key="6" className="fa-brands fa-facebook"></i>
                </li>
                <li key="3">
                <i key="6" className="fa-brands fa-instagram"></i>
                </li>
                <li key="4">
                <i key="7" className="fa-brands fa-youtube"></i>
                </li>
            </ul>
        </div>
        <ul>
            <li>
                <Link to="/" className="footer-link">About Us</Link>
            </li>
            <li>
                <Link to="/" className="footer-link">Terms of Service</Link>
            </li>
            <li>
                <Link to="/" className="footer-link">Privacy Policy</Link>
            </li>
            <li>
                <Link to="/" className="footer-link">FAQs</Link>
            </li>
            <li>
                <Link to="/" className="footer-link">Code of Conduct</Link>
            </li>
            <li>
                <Link to="/" className="footer-link">Contact Us</Link>
            </li>
        </ul>
        <form className={styles.footerForm} action="" method="get">
            <div>
                <label type="email">Subscribe to atelier newsletter</label><br></br>
                <input type="email" name="email" id="email" required/>
                <input className={styles.submitBtn} type="submit" value="Submit"/>
            </div>
        </form>
    </footer>
    );
}