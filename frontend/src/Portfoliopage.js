import React from "react";
import './Portfoliopage.css';
import Skill_container from './Skill_container';
import retriveNumberOfProjects from './DAO/NumberOfProjectsDAO';
import ProjectSection from "./ProjectSection";
import CertificationContainer from "./CertificationContainer";
import Footer from "./Footer";


export default function Portfoliopage(){

    var [numberOfProjects,setNumberOfProjects] = React.useState(0);

    const getTotalProjects = async() =>{
        const totalProjects = await retriveNumberOfProjects();
        setNumberOfProjects(totalProjects);
    }

    React.useEffect(()=>{
        getTotalProjects();
    },[]);


    let titleData = <div className="pfIntroTitle">
                        FULLSTACK &nbsp;APP DEVELOPER
                        <div className="devPlateforms">
                            <img src="./code.png" />
                            <img src="./apple.png" />
                            <img src="./android.png" />
                        </div>
                        <div className="NofProjects">
                            {`${numberOfProjects}+ Projects`} 
                        </div>
                        <br />
                        <div className="stacks">Web dev : <span className="techName">M.E.R.N.</span></div>
                        <div className="stacks">Mobile app dev : <span className="techName">Flutter</span></div>
                    </div>

    let education_data = <div className="EduText">
                            <span className="eduTitle">&nbsp;&nbsp;EDUCATIONAL BACKGROUND</span>
                            <br /><br /><br />
                            Vellore institute of technology, Vellore &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;July 2018 - August 2022
                            <br />
                            <span className="major">Major:</span> Mechanical Engineering &nbsp; <span className="gpa">GPA:</span> 8.59/10 <br />
                            <span className="coreSubs">Core courses of interest: </span>Problem Solving and Programming, Calculus for Engineers, Problem Solving and Object Oriented Programming, Applied Numerical Methods, Total Quality Management and Reliability, Business Mathematics, Advanced Aptitude and Reasoning Skills, Lean Start-up Management, Advanced JAVA Programming, Product Development and Management, Statistical Data Analytics for Business Research
                        </div>;

    let work_experience = <div className="expText">
                            <br />
                            <br />
                            <br />
                            <div className="expTitle">&nbsp;&nbsp;WORK EXPERIENCE</div><br /><br />
                            <div className="subExp">&nbsp;&nbsp;TECHNICAL</div>
                            <div className="expCompany"><div>Wipro - 5 months (April 2022 - Present)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><img className="company_logo" src="wipro_logo.png"/></div>
                            Responsibilities : Project Engineer - <span className="expRole">Full stack web developer</span>
                            <br />
                            <br />
                            <div className="subExp">&nbsp;&nbsp;SOCIAL</div>
                            <div className="expCompany"><div>AYUDA NGO (University club) - 1 year (July 2019 - June 2020)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></div>
                            Responsibilities : <span className="expRole">Social worker</span> - Managing and participating in verious social events such as helping in orphanage & oldage homes.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>

    return(
        <div className="Portfoliopage">
            <div className="portfolioPageStart">
                <div className="reservedforjarvis">k</div>
                <div className="pfIntro">
                    {titleData}
                </div>
            </div>
            <div className="eduContainer">
                {education_data}
            </div>
            <div className="expContainer">
                {work_experience}
            </div>
            <div className="skillsTitle">
                &nbsp;&nbsp;Technical Skills : 
            </div>
            <br />
            <br />
            <Skill_container />
            <div className="skillsTitle">
                &nbsp;&nbsp;Projects :
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <ProjectSection />
            <br />
            <br />
            <br />
            <div className="skillsTitle">
                &nbsp;&nbsp;Certifications :
            </div>
            <CertificationContainer />
            <Footer />
        </div>
    )
}