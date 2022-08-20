import React, { useEffect } from "react";
import Hexagon from "./Hexagon";
import Jarvis from "./Jarvis";
import Skill_state from './Skill_states.js';
import Data from './skillData';
import './Skill_container.css';
import retriveSkillData from "./DAO/skillDAO";


export default function Skill_container(){

    var [factor,setFactor] = React.useState(window.innerWidth>700?1:2);
    var [isInitiated,setIsInitiated] = React.useState(false);
    var[skillObject,setSkillObject] = React.useState({"skillName" : "","imagePath" : ""});

    
    function createStyle(index){
        const devidend = Math.floor(index/4);
        const remain = index%4;
        const add = (index%2==1)?5.355:0;
        return {
            marginLeft : `${(remain*9.1875)*factor}vw`,
            marginTop : `${((devidend*10.71)+add)*factor}vw`
        }
    }
    
    for(let k=0;k<21;k++){
        console.log(createStyle(k));
    }


    console.log(`skill container is built and the new factor value is : ${factor}`);

    function initialize(skillName,imagePath){
        console.log("init..........");
        setSkillObject({"skillName" : skillName,"imagePath" : imagePath});
        setIsInitiated(true);
    }
    useEffect(()=>{
        retriveSkillData();
        window.addEventListener('resize',()=>{
            if(window.innerWidth>700 && factor==2){
                setFactor(1);
            }
            if(window.innerWidth<700 && factor==1){
                setFactor(2);
            }
        });
    },[factor]);
    

    return (
        <>
            <div className="center">
                <div className="skillhive">
                    <Hexagon skillName = {"Flutter"} hexagonid={"flutter_hexagon"} imgsrc={"flutter.svg"} initialize={initialize} />
                    <Hexagon skillName = {"Java"} hexagonid={"java_hexagon"} imgsrc={"java.png"} initialize={initialize} />
                    <Hexagon skillName = {"Firebase"} hexagonid={"firebase_hexagon"} imgsrc={"firebase.png"} initialize={initialize} />
                    <Hexagon skillName = {"C#"} hexagonid={"cs_hexagon"} imgsrc={"cs.png"} initialize={initialize} />
                    <Hexagon skillName = {"CSS"} hexagonid={"css_hexagon"} imgsrc={"css.png"} initialize={initialize} />
                    <Hexagon skillName = {"HTML"} hexagonid={"html_hexagon"} imgsrc={"html.png"} initialize={initialize} />
                    <Hexagon skillName = {"Javascript"} hexagonid={"js_hexagon"} imgsrc={"js.png"} initialize={initialize} />
                    <Hexagon skillName = {"Node.JS"} hexagonid={"nodejs_hexagon"} imgsrc={"nodejs.png"} initialize={initialize} />
                    <Hexagon skillName = {"Bootstrap"} hexagonid={"bootstrap_hexagon"} imgsrc={"bootstrap.png"} initialize={initialize} />
                    <Hexagon skillName = {"React.JS"} hexagonid={"reactjs_hexagon"} imgsrc={"reactjs.png"} initialize={initialize} />
                    <Hexagon skillName = {"MongoDB"} hexagonid={"mongodb_hexagon"} imgsrc={"mongodb.png"} initialize={initialize} />
                    <Hexagon skillName = {"MySQL"} hexagonid={"mysql_hexagon"} imgsrc={"mysql.png"} initialize={initialize} />
                </div>
                <div id="hive_addons">
                    {isInitiated?<Skill_state skillName={skillObject.skillName} imagePath={skillObject.imagePath} proficiency={Data[skillObject.skillName]["Proficiency"]} percentage={Data[skillObject.skillName]["MasteryLevel"]} numberOfProjects={Data[skillObject.skillName]["NumberOfProjects"]} opacity={0} id={skillObject.skillName}/>:<Jarvis />}
                </div>
            </div>
        </>
    )
}