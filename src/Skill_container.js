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
                
                <div className="hexagon" id="firebase_hexagon">
                    <div className="container">
                        <img src="firebase.png" alt="load.png" className="skillicon" />
                    </div>
                    <div className="containershadow"></div>
                </div>
                <div className="hexagon" id="cs_hexagon">
                    <div className="container">
                        <img src="cs.png" alt="load.png" className="skillicon" />
                    </div>
                    <div className="containershadow"></div>
                </div>
            </div>
            <div className="row2">
                <div className="hexagon" id="css_hexagon">
                    <div className="container">
                        <img src="css.png" alt="load.png" className="skillicon" />
                    </div>
                    <div className="containershadow"></div>
                </div>
                <div className="hexagon" id="html_hexagon">
                    <div className="container">
                        <img src="html.png" alt="load.png" className="skillicon" />
                    </div>
                    <div className="containershadow"></div>
                </div>
                <div className="hexagon" id="js_hexagon">
                    <div className="container">
                        <img src="js.png" alt="load.png" className="skillicon" />
                    </div>
                    <div className="containershadow"></div>
                </div>
                <div className="hexagon" id="nodejs_hexagon">
                    <div className="container">
                        <img src="nodejs.png" alt="load.png" className="skillicon" />
                    </div>
                    <div className="containershadow"></div>
                </div>
            </div>
            <div className="row3">
                <div className="hexagon" id="bootstrap_hexagon">
                    <div className="container">
                        <img src="bootstrap.png" alt="load.png" className="skillicon" />
                    </div>
                    <div className="containershadow"></div>
                </div>
                <div className="hexagon" id="reactjs_hexagon">
                    <div className="container">
                        <img src="reactjs.png" alt="load.png" className="skillicon" />
                    </div>
                    <div className="containershadow"></div>
                </div>
                <div className="hexagon" id="mongodb_hexagon">
                    <div className="container">
                        <img src="mongodb.png" alt="load.png" className="skillicon" />
                    </div>
                    <div className="containershadow"></div>
                </div>
                <div className="hexagon" id="mysql_hexagon">
                    <div className="container">
                        <img src="mysql.png" alt="load.png" className="skillicon" />
                    </div>
                    <div className="containershadow"></div>
                </div>
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