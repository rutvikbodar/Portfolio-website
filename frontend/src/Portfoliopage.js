import React from "react";
import './Portfoliopage.css';

export default function Portfoliopage(){
    let data = <div className="EduText">
                    <span className="eduTitle">&nbsp;&nbsp;EDUCATIONAL BACKGROUND</span>
                    <br /><br /><br />
                    Vellore institute of technology, Vellore &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;July 2018 - August 2022
                    <br />
                    <span className="major">Major:</span> Mechanical Engineering &nbsp; <span className="gpa">GPA:</span> 8.59/10 <br />
                    <span className="coreSubs">Core courses of interest: </span>Problem Solving and Programming, Calculus for Engineers, Problem Solving and Object Oriented Programming, Applied Numerical Methods, Total Quality Management and Reliability, Business Mathematics, Advanced Aptitude and Reasoning Skills, Lean Start-up Management, Advanced JAVA Programming, Product Development and Management, Statistical Data Analytics for Business Research
                </div>
    return(
        <div className="Portfoliopage">
            <div className="portfolioPageStart">
                <div className="reservedforjarvis">k</div>
                <div className="pfIntro">k</div>
            </div>
            <div className="eduContainer">
                {data}
            </div>
        </div>
    )
}