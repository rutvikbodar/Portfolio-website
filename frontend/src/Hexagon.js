import React from "react";
import './Hexagon.css'

export default function Hexagon(props){
    return (
        <div className="hexagon" style={props.style}  onClick={()=>{props.initialize(props.skillName,props.imgsrc,props.proficiency,props.MasteryLevel,props.NumberOfProjects,props.id)}}>
            <div className="container">
                    <img src={props.imgsrc} alt="load.png" className="skillicon" />
            </div>
            <div className="containershadow"></div>
        </div>
    )
}