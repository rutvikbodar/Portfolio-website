import React from 'react';
import './Aboutpage.css';
import Footer from './Footer';

export default function AboutPage(){
    return(
        <div>
            <div className='aboutPage'>
                <div className='coffeeContainer'>
                    <img src={"coffee.png"} className={"coffeeImage"} />
                </div>
                <div className='aboutDescription'>

                </div>
            </div>
            <Footer />
        </div>
    )
}