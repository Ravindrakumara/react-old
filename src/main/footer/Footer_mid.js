import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import Ebook from '/Users/Ravindrakumara/Desktop/books/src/assert/Ebook.PNG';

function footer_mid() {
    return (
    
            <nav className="footer">
                <Link to="/contact">
                    <img src={Ebook} className="header__logo" />
                </Link>
                <div className="contact">
                    <h1>Meditation Center</h1>
                    <address>50 peter lane dehiwala colombo srilanka</address>
                    <telephone>+94(0)112704545/ +94(0)777884395</telephone><br />
                    <a href="mailto:ravindrakumara.rk@gmail.com">ravindrakumara.rk@gmail.com</a>
                </div>

                <div className="detail">
                    <h1>Library Open Time </h1>
                    <b>Mon - Fri : 08:00 AM - 09:30 AM</b><br />
                    <b>Sat - Sun : 09:00 AM - 10:30 AM</b>
                </div>

                
            </nav>
        
    )
}

export default footer_mid
