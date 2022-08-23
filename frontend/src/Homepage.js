import React from "react";
import About from "./About";
import Connect from "./Connect";
import './Homepage.css';
import Navbar from "./Navbar";
import ProfileCover from './ProfileCover';
import ProfilePhoto from "./ProfilePhoto";

export default function Homepage(){
    return(
        <div className="homepage">
            <Navbar />
            <Connect />
            <div className="profileContainer">
                <div>
                <ProfileCover />
                <ProfilePhoto />
                </div>
                <About />
            </div>
        </div>
    )
}