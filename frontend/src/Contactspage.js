import React from "react";
import './Contactspage.css';
import Footer from './Footer';
import sendMessage from './DAO/newMessageDAO';

export default function Contactspage(){

    var [formData,setFormData] = React.useState({
        "name" : "",
        "email" : "",
        "message" : ""
    });

    console.log(formData);

    var handleChange = (event)=>{
        if(event.target.name==="name"){
            setFormData({...formData,[event.target.name] : event.target.value});
        }
        else if(event.target.name==="email"){
            setFormData({...formData,[event.target.name]:event.target.value});
        }
        else{
            setFormData({...formData,[event.target.name]:event.target.value});
        }
    }

    return (
        <div>
            <div className="contactspage">
                <div className="formBox">
                    <div className="introMessage">Have an idea or want to work together?</div>
                    <div className="fieldTag">Name</div>
                    <input className={"textBox"} name={"name"} type={"text"} onChange={handleChange} value={formData.name} />
                    <div className="fieldTag">Email</div>
                    <input className={"textBox"} name={"email"} type={"text"} onChange={handleChange} value={formData.email} />
                    <div className="fieldTag">Message</div>
                    <textarea className="textArea" name={"message"} onChange={handleChange} value={formData.message} > </textarea>
                    <div className="sendButton" onClick={()=>{sendMessage(formData)}}>Send</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}