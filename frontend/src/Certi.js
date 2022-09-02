import './Certi.css';
import React from 'react';

export default function Certi(){
    return(
        <div className='certi'>
            <div className='name'>Microsoft Azure AZ-900</div>
            <div className='org'><span className='by'>By </span><div className='orgLogo'><img src='coursera.png' /></div></div>
            <div className='linkButton'>View certificate</div>
        </div>
    )
}