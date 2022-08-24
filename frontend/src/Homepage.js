import React from "react";
import About from "./About";
import Connect from "./Connect";
import './Homepage.css';
import ProfileCover from './ProfileCover';
import ProfilePhoto from "./ProfilePhoto";

export default function Homepage(){
    return(
        <div className="homepage">
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