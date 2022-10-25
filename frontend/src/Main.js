import React from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import PortfolioPage from './Portfoliopage';
import Aboutpage from "./Aboutpage";
import Contactspage from './Contactspage';
import {connect} from 'react-redux';
import { numberOfProjects, getAllProjects, getAllCertificates, getAllSkills } from "./ActionCreaters/Index";

const main =  function Main(props){

    var [currentPage,setCurrentPage] = React.useState("Homepage");

    const providePage = (page)=>{
        if(page==="Homepage") return <Homepage key={"homepage"}/>
        else if(page==="Portfoliopage") return <PortfolioPage key={"portfoliopage"} />
        else if(page === "Aboutpage") return <Aboutpage key={"aboutpage"}/>
        else if(page === "Contactspage") return <Contactspage key={"contactspage"} />
    }

    const provideCurrentpageShadow = (option)=>{
        if(currentPage===option) return {textShadow : "1px 1px 0px goldenrod", fontWeight : "900"};
        else return {};
    }

    React.useEffect(()=>{
        providePage("Homepage");
        props.numberOfProjects();
        props.getAllProjects();
        props.getAllCertificates();
        props.getAllSkills();
    },[]);

    return(
        <>
            <Navbar router={setCurrentPage} shadowProvider={provideCurrentpageShadow}/>
            {providePage(currentPage)}
        </>
    )
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps,{numberOfProjects,getAllProjects,getAllCertificates,getAllSkills})(main);