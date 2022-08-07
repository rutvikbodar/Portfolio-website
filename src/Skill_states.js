import React from "react";
import './Skill_states.css'

export default function Skill_states(props){
    var percentageBallStyle = {marginLeft : `${(props.percentage*0.75)-2.5}%`}
    var percentageLayerStyle = {width : `${props.percentage}%`}
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
            <div id="skillhive-detail-body">
                <div className="expertiseLevel">
                    <p className="expertiseLevelText">Proficiency : {props.proficiency}</p>
                </div>
                <div className="levelBarContainer">
                    <div className="percentageBall" style={percentageBallStyle}><p className="percentageText">{props.percentage}%</p></div>
                    <div className="percentageBar">
                        <div className="percentageBelowLayer"></div>
                        <div className="percentageLayer" style={percentageLayerStyle}></div>
                    </div>
                    <p className="masteryLabel">Mastery Level</p> 
                </div>
            </div>
        </div>
    )
}