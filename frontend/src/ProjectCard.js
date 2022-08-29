import React from "react";
import './ProjectCard.css';

export default function ProjectCard(props){
    var style = (props.index%2==0)?{marginLeft : "3vw"}:{marginLeft : "35vw"}

    var projectImage = (<div className="projectImageCover">
                            <img src="desktop.png" className="projectImage"/>
                            <div className="projectImageContainer">
                                <img className="projectImage" src="portfolioProject.png" />
                            </div>
                        </div>);

    var projectDes = (<div className="ProjectDes">
                        <div className="titleContainer">
                            <div className="projectName">
                                Portfolio Website
                            </div>
                            <div className="projectVersion">
                                V 1
                            </div>
                        </div>
                        <div className="projectDescription">
                            <ul>
                                <li>
                                A full stack animation rich web application to represent my portfolio in a creative and interactive way.
                                </li>
                                <li>Technologies used : <span className="highlight"> M.E.R.N</span></li>
                                <li><span className="highlight">Creativity</span>: the application is heavely backed by various algorithms that generates new design and styling according to data. for instance, you just need to add new skill to database and algorithms will take care of positioning and animations.</li>
                            </ul>
                            <a href="https://github.com/rutvikbodar/Portfolio-website/tree/main" target={"_blank"}>
                                <div className="githubrepo">Github Repo</div>
                            </a>
                        </div>
                    </div>);

    return (
        <div className="projectCard" style={style}>
            {(props.index%2==0)
            ?[projectImage,projectDes]
            :[projectDes,projectImage]}
        </div>
    )
}