import React from "react";
import './Navbar.css';

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="developerName"><div className="developerText">Rutvik Bodar</div></div>
            <div className="menu">
                <div className="menuoptions">Home</div>
                <div className="menuoptions">Portfolio</div>
                <div className="menuoptions">About</div>
                <div className="menuoptions">Contacts</div>
            </div>
        </div>
    )
}