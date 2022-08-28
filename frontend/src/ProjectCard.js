import React from "react";
import './ProjectCard.css';

export default function ProjectCard(props){
    return (
        <div className="projectCard">
            <div className="projectImageCover">
                <img src="desktop.png" className="projectImage"/>
                <div className="projectImageContainer">
                    <img className="projectImage" src="portfolioProject.png" />
                </div>
            </div>
            <div className="ProjectDes"></div>
        </div>
    )
}