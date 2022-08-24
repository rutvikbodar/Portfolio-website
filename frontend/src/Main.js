import React from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import PortfolioPage from './Portfoliopage';
import Aboutpage from "./Aboutpage";
import Contactspage from './Contactspage'

export default function Main(){

    var [currentPage,setCurrentPage] = React.useState("Homepage");

    const providePage = (page)=>{
        if(page==="Homepage") return <Homepage key={"homepage"}/>
        else if(page==="Portfoliopage") return <PortfolioPage key={"portfoliopage"}/>
        else if(page === "Aboutpage") return <Aboutpage key={"aboutpage"}/>
        else if(page === "Contactspage") return <Contactspage key={"contactspage"} />
    }

    React.useEffect(()=>{
        providePage("Homepage");
    },[]);

    return(
        <>
            <Navbar router={setCurrentPage}/>
            {providePage(currentPage)}
        </>
    )
}