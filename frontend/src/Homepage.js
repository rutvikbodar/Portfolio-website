import React from "react";
import Connect from "./Connect";
import './Homepage.css';
import Navbar from "./Navbar";
import ProfilePhoto from "./ProfilePhoto";

export default function Homepage(){
    return(
        <div className="homepage">
            <Navbar />
            <Connect />
            <ProfilePhoto />
        </div>
    )
}