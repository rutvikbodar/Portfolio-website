import React from "react";
import './Navbar.css';

export default function Navbar(props){
    
    return (
        <div className="navbar">
            <div className="developerName"><div className="developerText">Rutvik Bodar</div></div>
            <div className="menu">
                <div className="menuoptions" onClick={()=>props.router("Homepage")} style={props.shadowProvider("Homepage")}>Home</div>
                <div className="menuoptions" onClick={()=>props.router("Portfoliopage")} style={props.shadowProvider("Portfoliopage")}>Portfolio</div>
                <div className="menuoptions" onClick={()=>props.router("Aboutpage")} style={props.shadowProvider("Aboutpage")}>About</div>
                <div className="menuoptions" onClick={()=>props.router("Contactspage")} style={props.shadowProvider("Contactspage")}>Contacts</div>
            </div>
        </div>
    )
}