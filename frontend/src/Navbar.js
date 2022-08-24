import React from "react";
import './Navbar.css';

export default function Navbar(props){
    
    return (
        <div className="navbar">
            <div className="developerName"><div className="developerText">Rutvik Bodar</div></div>
            <div className="menu">
                <div className="menuoptions" onClick={()=>props.router("Homepage")}>Home</div>
                <div className="menuoptions" onClick={()=>props.router("Portfoliopage")}>Portfolio</div>
                <div className="menuoptions" onClick={()=>props.router("Aboutpage")}>About</div>
                <div className="menuoptions" onClick={()=>props.router("Contactspage")}>Contacts</div>
            </div>
        </div>
    )
}