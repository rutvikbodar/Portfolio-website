import React from "react";
import Connect from "./Connect";
import './Homepage.css';
import Navbar from "./Navbar";

export default function Homepage(){
    return(
        <div className="homepage">
            <Navbar />
            <Connect />
        </div>
    )
}