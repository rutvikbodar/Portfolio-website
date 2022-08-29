import React from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import PortfolioPage from './Portfoliopage';
import Aboutpage from "./Aboutpage";
import Contactspage from './Contactspage'

export default function Main(){

    var [currentPage,setCurrentPage] = React.useState("Portfoliopage");

    const providePage = (page)=>{
        if(page==="Homepage") return <Homepage key={"homepage"}/>
        else if(page==="Portfoliopage") return <PortfolioPage key={"portfoliopage"}/>
        else if(page === "Aboutpage") return <Aboutpage key={"aboutpage"}/>
        else if(page === "Contactspage") return <Contactspage key={"contactspage"} />
    }

    const provideCurrentpageShadow = (option)=>{
        console.log(option,currentPage);
        if(currentPage===option) return {textShadow : "1px 1px 0px goldenrod", fontWeight : "900"};
        else return {};
    }

    React.useEffect(()=>{
        providePage("Homepage");
    },[]);

    return(
        <>
            <Navbar router={setCurrentPage} shadowProvider={provideCurrentpageShadow}/>
            {providePage(currentPage)}
        </>
    )
}