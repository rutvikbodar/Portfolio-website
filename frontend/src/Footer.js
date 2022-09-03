import './Footer.css';
import React from "react";

export default function Footer(){
    return(
        <div className="footer">
            <div className='copyright'>
                <div className='credits'>Credits</div>
                <br />
                All the images, used in this websites are derived from open-source resources.<br />
                This project is inspired by one of my favourite book, How to win friends and influnce people by Dale Carnegie. 
            </div>
            <div className='links'>
                <div className='connectFooter'>Contact us</div>
                <br />
                <div className='connectIconBar'>
                    <div className='connectIcons'><img src='email.png' /></div>
                    <div className='connectIcons'><img src='linkedin.png' /></div>
                    <div className='connectIcons'><img src='insta.png' /></div>
                    <div className='connectIcons'><img src='github.png' /></div>
                    <div className='connectIcons'><img src='fb.png' /></div>
                    <div className='connectIcons'><img src='tweeter.png' /></div>
                </div>
            </div>
        </div>
    )
}