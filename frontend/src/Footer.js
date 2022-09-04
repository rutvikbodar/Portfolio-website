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
                    <a href='mailto:rutvik777.rb@gmail.com'><div className='connectIcons'><img src='email.png' /></div></a>
                    <a href='https://www.linkedin.com/in/rutvik-bodar-bba927195/'><div className='connectIcons'><img src='linkedin.png' /></div></a>
                    <a href='https://www.instagram.com/rutvikbodar/'><div className='connectIcons'><img src='insta.png' /></div></a>
                    <a href='https://github.com/rutvikbodar'><div className='connectIcons'><img src='github.png' /></div></a>
                    <a href='https://www.facebook.com/profile.php?id=100007320045966'><div className='connectIcons'><img src='fb.png' /></div></a>
                    <a href='https://twitter.com/rutvik_bodar'><div className='connectIcons'><img src='tweeter.png' /></div></a>
                </div>
                <br />
                <div>Email us : rutvik777.rb@gmail.com</div>
            </div>
        </div>
    )
}