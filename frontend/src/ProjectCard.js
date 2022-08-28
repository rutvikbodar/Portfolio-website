import React from "react";
import './ProjectCard.css';

export default function ProjectCard(props){
    return (
        <div className="projectCard">
            <div className="projectImageCover">
                <img src="desktop.png" className="projectImage"/>
            </div>
            <div className="ProjectDes"></div>
        </div>
    )
}