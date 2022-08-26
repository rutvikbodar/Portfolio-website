import React from "react";
import './Portfoliopage.css';

export default function Portfoliopage(){
    let education_data = <div className="EduText">
                            <span className="eduTitle">&nbsp;&nbsp;EDUCATIONAL BACKGROUND</span>
                            <br /><br /><br />
                            Vellore institute of technology, Vellore &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;July 2018 - August 2022
                            <br />
                            <span className="major">Major:</span> Mechanical Engineering &nbsp; <span className="gpa">GPA:</span> 8.59/10 <br />
                            <span className="coreSubs">Core courses of interest: </span>Problem Solving and Programming, Calculus for Engineers, Problem Solving and Object Oriented Programming, Applied Numerical Methods, Total Quality Management and Reliability, Business Mathematics, Advanced Aptitude and Reasoning Skills, Lean Start-up Management, Advanced JAVA Programming, Product Development and Management, Statistical Data Analytics for Business Research
                        </div>;

    let work_experience = <div className="expText">
                            <div className="expTitle">&nbsp;&nbsp;WORK EXPERIENCE</div><br /><br />
                            <div className="subExp">&nbsp;&nbsp;TECHNICAL</div><br />
                            <div className="expCompany"><div>Wipro - 5 months (April 2022 - Present)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><img className="company_logo" src="wipro_logo.png"/></div>
                            Responsibilities : Project Engineer - <span className="expRole">Full stack web developer</span>
                            <br />
                            <br />
                            <br />
                            <div className="subExp">&nbsp;&nbsp;SOCIAL</div><br />
                            <div className="expCompany"><div>AYUDA NGO (University club) - 1 year (July 2019 - June 2020)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></div>
                            Responsibilities : <span className="expRole">Social worker</span> - Managing and participating in verious social events such as helping in orphanage & oldage homes.
                            <br />
                            <br />
                        </div>

    return(
        <div className="Portfoliopage">
            <div className="portfolioPageStart">
                <div className="reservedforjarvis">k</div>
                <div className="pfIntro">k</div>
            </div>
            <div className="eduContainer">
                {education_data}
            </div>
            <div className="expContainer">
                {work_experience}
            </div>
        </div>
    )
}