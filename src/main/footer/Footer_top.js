import React from 'react'
import One from '/Users/Ravindrakumara/Desktop/books/src/assert/One.jpg';
import Two from '/Users/Ravindrakumara/Desktop/books/src/assert/Two.png';
import Thdri from '/Users/Ravindrakumara/Desktop/books/src/assert/Thdri.png';
import './Footer_top.css';
function Footer_top() {
    return (
        <div className="footer_top">
            <div className="row">
                <img src={One} className="Em__logo" /><h1 className="Et__logo" >Meditation Books</h1>
                <img src={Two} className="Em__logo" /><h1 className="Et__logo">Meditation Music</h1>
                <img src={Thdri} className="Em__logo" /><h1 className="Et__logo">Meditation Course</h1>
            </div>
        </div>
    )
}

export default Footer_top
