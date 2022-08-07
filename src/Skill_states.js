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
                    <div className="percentageIndicator">
                        <div className="indicatorValue">0</div>
                        <div className="indicatorValue">10</div>
                        <div className="indicatorValue">20</div>
                        <div className="indicatorValue">30</div>
                        <div className="indicatorValue">40</div>
                        <div className="indicatorValue">50</div>
                        <div className="indicatorValue">60</div>
                        <div className="indicatorValue">70</div>
                        <div className="indicatorValue">80</div>
                        <div className="indicatorValue">90</div>
                        <div className="indicatorValue">100</div>
                    </div>
                </div>
            </div>
        </div>
    )
}