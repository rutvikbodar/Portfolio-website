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
            <div className="connection"></div>
            <div className="connection"></div>
            <div className="connection"></div>
            <div className="connection"></div>
            <div className="connection"></div>
        </div>
        </>
        
    )
}