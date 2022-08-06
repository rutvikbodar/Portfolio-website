import React from "react";
import Hexagon from "./Hexagon";
import Jarvis from "./Jarvis";
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
        <Jarvis />
    </div>
        </>
    )
}