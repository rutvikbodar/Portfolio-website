import React from "react";
import './Skill_states.css'

export default function Skill_states(props){
    return (
        <div id="skillhive-detailed">
            <div id="skillhive-detail-header">
	            <div id="skillhive-detailed-icon">
		            <img src={props.imagePath} alt="loading..." id="detailed-skill-icon" />
	            </div>
	            <div id="skillhive-detailed-title-block">
		            <div className="skill-title" id="skill-title">{props.skillName}</div>
	            </div>
            </div>
            <div id="skillhive-detail-body"></div>
        </div>
    )
}