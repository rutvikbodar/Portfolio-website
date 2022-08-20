import React from "react";
import './Hexagon.css'

export default function Hexagon(props){
    return (
        <div className="hexagon" id={props.hexagonid} onClick={()=>{props.initialize(props.skillName,props.imgsrc)}}>
            <div className="container">
                    <img src={props.imgsrc} alt="load.png" className="skillicon" />
            </div>
            <div className="containershadow"></div>
        </div>
    )
}