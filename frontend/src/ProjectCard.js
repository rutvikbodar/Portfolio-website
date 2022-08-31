import React from "react";
import './ProjectCard.css';

export default function ProjectCard(props){
    var style = (props.index%2==0)?{marginLeft : "3vw"}:{marginLeft : "35vw"}
    var frameStyle;
    var projectImageContainer;
    var [versionCardStyle,setVersionCardStyle] = React.useState((props.index%2===0)?{"marginLeft" : "35vw"}:{"marginLeft" : "45vw"});
    var [visible,setVisible] = React.useState(false);

    if(props.type==="web"){
        frameStyle={"height":"100%","width":"100%"};
        projectImageContainer={"position" : "absolute","backgroundColor" : "red","marginTop":"4%","marginLeft":"0%","height":"71.5%","width":"92%"}
    }
    else{
        frameStyle={"height":"100%"};
        projectImageContainer={"position" : "absolute","backgroundColor" : "red","marginTop":"8.45%","height":"80%","width":"39%"}
    }

    var toggleVersions = ()=>{
        if(props.index%2===0){
            if(!visible){
                setVersionCardStyle({"marginLeft" : "65vw"});
                setVisible(true);
            }
            else{
                setVersionCardStyle({"marginLeft" : "35vw"});
                setVisible(false);
            }
        }
        else{
            if(!visible){
                setVersionCardStyle({"marginLeft" : "15vw"});
                setVisible(true);
            }
            else{
                setVersionCardStyle({"marginLeft" : "45vw"});
                setVisible(false);
            }
        }
        console.log(versionCardStyle);
    }
    
    var projectImage = (<div className="projectImageCover" key={"projectImageCover"}>
                            <img src={(props.type==="web")?"desktop.png":"phone.png"} className="projectframe"/>
                            <div  style={projectImageContainer}>
                                <img className="projectImage" src={props.img} />
                            </div>
                        </div>);

    var projectDes = (<div className="ProjectDes" key={"ProjectDes"}>
                        <div className="titleContainer">
                            <div className="projectName">
                                {props.name}
                            </div>
                            <div className="projectVersion" onClick={toggleVersions}>
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
        <div>
            <div className="versionCard" style={versionCardStyle}>
                
            </div>
            <div className="projectCard" style={style}>
                {(props.index%2==0)
                ?[projectImage,projectDes]
                :[projectDes,projectImage]}
            </div>
        </div>
    )
}