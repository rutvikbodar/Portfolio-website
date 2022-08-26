import React, { useEffect } from "react";
import Hexagon from "./Hexagon";
import Jarvis from "./Jarvis";
import Skill_state from './Skill_states.js';
import './Skill_container.css';
import retriveSkillData from "./DAO/skillDAO";


export default function Skill_container(){

    var [factor,setFactor] = React.useState(window.innerWidth>700?1:2);
    var [isInitiated,setIsInitiated] = React.useState(false);
    var[skillObject,setSkillObject] = React.useState({"skillName" : "","imagePath" : "","proficiency":"","MasteryLevel":"","NumberOfProjects":"","id":""});
    var [skillData,setSkillData] = React.useState([]);

    
    function createStyle(index){
        const devidend = Math.floor(index/4);
        const remain = index%4;
        const add = (index%2==1)?5.355:0;
        return {
            marginLeft : `${(remain*9.1875)*factor}vw`,
            marginTop : `${((devidend*10.71)+add)*factor}vw`
        }
    }

    console.log(`skill container is built and the new factor value is : ${factor}`);

    function initialize(skillName,imagePath,proficiency,MasteryLevel,NumberOfProjects,id){
        console.log("init..........");
        setSkillObject({"skillName" : skillName,"imagePath" : imagePath,"proficiency":proficiency,"MasteryLevel":MasteryLevel,"NumberOfProjects":NumberOfProjects,"id":id});
        console.log(skillObject);
        setIsInitiated(true);
    }

    async function populateData(){
        var results = await retriveSkillData();
        setSkillData(results);
    }
    console.log(skillData);


    useEffect(()=>{
        window.addEventListener('resize',()=>{
            if(window.innerWidth>700 && factor==2){
                setFactor(1);
            }
            if(window.innerWidth<700 && factor==1){
                setFactor(2);
            }
        });
    },[factor]);

    useEffect(()=>{
        populateData();
        console.log("populating completed");
    },[])
    

    return (
        <div className="alignSkills">
            <div className="center">
                <div className="skillhive">
                    {
                        (skillData.length!=0)?skillData.map(element => {
                            return <Hexagon skillName={element["skill"]} proficiency={element["Proficiency"]} MasteryLevel={element["MasteryLevel"]} NumberOfProjects={element["NumberOfProjects"]} id={element["id"]} style={createStyle(element["index"])} imgsrc={element["imgsrc"]} initialize={initialize} key={element["_id"]} />
                        }):
                        <div></div>
                    }
                </div>
                <div id="hive_addons">
                    {isInitiated?<Skill_state skillName={skillObject.skillName} imagePath={skillObject.imagePath} proficiency={skillObject["proficiency"]} percentage={skillObject["MasteryLevel"]} numberOfProjects={skillObject["NumberOfProjects"]} opacity={0} id={skillObject.skillName}/>:<Jarvis />}
                </div>
            </div>
        </div>
    )
}