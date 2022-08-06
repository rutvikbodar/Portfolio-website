import React from "react";
import Hexagon from "./Hexagon";
import './Skill_container.css';
export default function Skill_container(){
    return (
        <>
            <div className="center">
            <div className="skillhive">
            <div className="row1">
                <Hexagon hexagonid={"flutter_hexagon"} imgsrc={"flutter.svg"} />
                <Hexagon hexagonid={"java_hexagon"} imgsrc={"java.png"} />
                <Hexagon hexagonid={"firebase_hexagon"} imgsrc={"firebase.png"} />
                <Hexagon hexagonid={"cs_hexagon"} imgsrc={"cs.png"} />
            </div>
            <div className="row2">
                <Hexagon hexagonid={"css_hexagon"} imgsrc={"css.png"} />
                <Hexagon hexagonid={"html_hexagon"} imgsrc={"html.png"} />
                <Hexagon hexagonid={"js_hexagon"} imgsrc={"js.png"} />
                <Hexagon hexagonid={"nodejs_hexagon"} imgsrc={"nodejs.png"} />
            </div>
            <div className="row3">
                <Hexagon hexagonid={"bootstrap_hexagon"} imgsrc={"bootstrap.png"} />
                <Hexagon hexagonid={"reactjs_hexagon"} imgsrc={"reactjs.png"} />
                <Hexagon hexagonid={"mongodb_hexagon"} imgsrc={"mongodb.png"} />
                <Hexagon hexagonid={"mysql_hexagon"} imgsrc={"mysql.png"} />
            </div>
        </div>
        <div id="hive_addons">
           <div id="choose-skill">
            <div className="choose-skill-l1"></div>
                <div className="arc">
                    <div className="temp"></div>
                    <div className="temp_cover"></div>
                </div>
                <div className="tri-circle">
                    <div className="tri" id="tri1"></div>
                    <div className="tri" id="tri2"></div>
                    <div className="tri" id="tri3"></div>
                    <div className="tri" id="tri4"></div>
                    <div className="tri" id="tri5"></div>
                    <div className="tri" id="tri6"></div>
                    <div className="tri" id="tri7"></div>
                    <div className="tri" id="tri8"></div>
                    <div className="tri" id="tri9"></div>
                    <div className="tri" id="tri10"></div>
                    <div className="tri" id="tri11"></div>
                    <div className="tri" id="tri12"></div>
                    <div className="tri" id="tri13"></div>
                    <div className="tri" id="tri14"></div>
                    <div className="tri" id="tri15"></div>
                    <div className="tri" id="tri16"></div>
                    <div className="tri" id="tri17"></div>
                    <div className="tri" id="tri18"></div>
                </div>
                <div className="choose-skill-center-container">
                    <img src="chooseskill.png" alt="Loading..." className="choose-skill-center-image" />
                </div>
            </div>
        </div>
    </div>
        </>
    )
}