import React from "react";
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
            <ProfileCover />
            <ProfilePhoto />
        </div>
    )
}