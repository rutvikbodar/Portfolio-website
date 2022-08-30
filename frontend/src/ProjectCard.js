import React from "react";
import './ProjectCard.css';

export default function ProjectCard(props){
    var style = (props.index%2==0)?{marginLeft : "3vw"}:{marginLeft : "35vw"}

    var projectImage = (<div className="projectImageCover">
                            <img src="desktop.png" className="projectImage"/>
                            <div className="projectImageContainer">
                                <img className="projectImage" src={props.img} />
                            </div>
                        </div>);

    var projectDes = (<div className="ProjectDes">
                        <div className="titleContainer">
                            <div className="projectName">
                                {props.name}
                            </div>
                            <div className="projectVersion">
                                {props.version}
                            </div>
                        </div>
                        <div className="projectDescription">
                            <ul>
                                <li>
                                {props.description}
                                </li>
                                <li>Technologies used : <span className="highlight">{props.tech}</span></li>
                                <li><span className="highlight">Creativity</span>: {props.creativity}</li>
                            </ul>
                            <a href={props.gitrepo} target={"_blank"}>
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