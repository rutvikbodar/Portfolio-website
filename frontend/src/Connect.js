import React from "react";
import './Connect.css';

export default function Connect(){
    var hidden = true;
    const toggle = () =>{
        (hidden)?hidden=false:hidden=true;
        console.log(hidden);
    }
    

    return (
        <>
            <div className="connect" onClick={toggle}>
                <img src="connect.jpg" className="connectImage"></img>
            </div>
            <div className="instagram"><img src="insta.png" className="connectionImage" id="instagram"></img></div>
            <div className="facebook"><img src="fb.png" className="connectionImage" id="facebook"></img></div>
            <div className="linkedin"><img src="linkedin.png" className="connectionImage" id="linkedin"></img></div>
            <div className="email"><img src="email.png" className="connectionImage" id="email"></img></div>
            <div className="tweeter"><img src="tweeter.png" className="connectionImage" id="tweeter"></img></div>
            <div className="github"><img src="github.png" className="connectionImage" id="github"></img></div>
        </>
        
    )
}