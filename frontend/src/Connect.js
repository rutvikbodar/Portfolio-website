import React from "react";
import './Connect.css';

export default function Connect(){
    var [hidden,setHidden] = React.useState(true);
    console.log(hidden);
    var [style,setStyle] = React.useState((hidden)?{}:{marginTop : "100px",position : "fixed"});
    console.log(style);
    const toggle = () =>{
        if(hidden){
            setHidden(false);
            setStyle({});
        }
        else{
            setHidden(true);
            setStyle({marginTop:"0px"});
        }
        console.log(hidden);
        console.log(style);
    }
    React.useEffect(()=>toggle(),[])
    
    

    return (
        <>
            <div className="connectContainer">
                <div className="connect" onClick={toggle}><img src="connect.jpg" className="connectImage"></img></div>
                <div className="instagram" style={style}><a href="https://www.instagram.com/rutvikbodar/" target={"_blank"} ><img src="insta.png" className="connectionImage" id="instagram"></img></a></div>
                <div className="facebook" style={style}><a href="https://www.facebook.com/profile.php?id=100007320045966" target={"_blank"}><img src="fb.png" className="connectionImage" id="facebook"></img></a></div>
                <div className="linkedin" style={style}><a href="https://www.linkedin.com/in/rutvik-bodar-bba927195/" target={"_blank"}><img src="linkedin.png" className="connectionImage" id="linkedin"></img></a></div>
                <div className="email" style={style}><a href="mailto:rutvik777.rb@gmail.com" target={"_blank"}><img src="email.png" className="connectionImage" id="email"></img></a></div>
                <div className="tweeter" style={style}><a href="https://twitter.com/rutvik_bodar" target={"_blank"}><img src="tweeter.png" className="connectionImage" id="tweeter"></img></a></div>
                <div className="github" style={style}><a href="https://github.com/rutvikbodar" target={"_blank"}><img src="github.png" className="connectionImage" id="github"></img></a></div>
            </div>
        </>
        
    )
}