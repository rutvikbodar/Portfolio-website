import './ProfileCover.css';
import React from 'react';

export default function ProfileCover(){
    var coverStyle = (window.innerHeight<1035)?{"animation": "rotatelAnimation 1s forwards"}:{}
    return(
        <div className='ProfileCoverContainer' style={coverStyle}>
            <img className='ProfileCover' src='./bodar.jpg'></img>
        </div>
    )
}