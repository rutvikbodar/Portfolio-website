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
                    <div className="fieldTag" id="nameTag">Name</div>
                    <input className={"textBox"} id="nameField" name={"name"} type={"text"} onChange={handleChange} value={formData.name} />
                    <div className="fieldTag" id="emailTag">Email</div>
                    <input className={"textBox"} id="emailField" name={"email"} type={"text"} onChange={handleChange} value={formData.email} />
                    <div className="fieldTag" id="messageTag">Message</div>
                    <textarea className="textArea" id="messageField" name={"message"} onChange={handleChange} value={formData.message} > </textarea>
                    <div className="sendButton" id="sendButtonTag" onClick={()=>{sendMessage(formData)}}>Send</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}