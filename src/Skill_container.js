import React from "react";
import Hexagon from "./Hexagon";
import Jarvis from "./Jarvis";
import Skill_state from './Skill_states.js'
import './Skill_container.css';
export default function Skill_container(){
    var [isInitiated,setIsInitiated] = React.useState(false);
    var[skillObject,setSkillObject] = React.useState({"skillName" : "","imagePath" : ""});

    function initialize(skillName,imagePath){
        console.log("init..........");
        setSkillObject({"skillName" : skillName,"imagePath" : imagePath});
        setIsInitiated(true);
    }

    return (
        <>
            <div className="center">
                <div className="skillhive">
                    <div className="row1">
                        <Hexagon skillName = {"Flutter"} hexagonid={"flutter_hexagon"} imgsrc={"flutter.svg"} initialize={initialize} />
                        <Hexagon skillName = {"Java"} hexagonid={"java_hexagon"} imgsrc={"java.png"} initialize={initialize} />
                        <Hexagon skillName = {"Firebase"} hexagonid={"firebase_hexagon"} imgsrc={"firebase.png"} initialize={initialize} />
                        <Hexagon skillName = {"C#"} hexagonid={"cs_hexagon"} imgsrc={"cs.png"} initialize={initialize} />
                    </div>
                    <div className="row2">
                        <Hexagon skillName = {"CSS"} hexagonid={"css_hexagon"} imgsrc={"css.png"} initialize={initialize} />
                        <Hexagon skillName = {"HTML"} hexagonid={"html_hexagon"} imgsrc={"html.png"} initialize={initialize} />
                        <Hexagon skillName = {"Javascript"} hexagonid={"js_hexagon"} imgsrc={"js.png"} initialize={initialize} />
                        <Hexagon skillName = {"Node.JS"} hexagonid={"nodejs_hexagon"} imgsrc={"nodejs.png"} initialize={initialize} />
                    </div>
                    <div className="row3">
                        <Hexagon skillName = {"Bootstrap"} hexagonid={"bootstrap_hexagon"} imgsrc={"bootstrap.png"} initialize={initialize} />
                        <Hexagon skillName = {"React JS"} hexagonid={"reactjs_hexagon"} imgsrc={"reactjs.png"} initialize={initialize} />
                        <Hexagon skillName = {"MongoDB"} hexagonid={"mongodb_hexagon"} imgsrc={"mongodb.png"} initialize={initialize} />
                        <Hexagon skillName = {"MySQL"} hexagonid={"mysql_hexagon"} imgsrc={"mysql.png"} initialize={initialize} />
                    </div>
                </div>
                <div id="hive_addons">
                    {isInitiated?<Skill_state skillName={skillObject.skillName} imagePath={skillObject.imagePath} proficiency={"Advanced"} percentage={0} numberOfProjects={2} />:<Jarvis />}
                </div>
            </div>
        </>
    )
}