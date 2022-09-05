import React from "react";
import './Contactspage.css';
import Footer from './Footer';

export default function Contactspage(){
    return (
        <div>
            <div className="contactspage">
                <div className="formBox">
                    <div className="introMessage">Have an idea or want to work together?</div>
                    <div className="fieldTag">Name</div>
                    <input className={"textBox"} type={"text"} />
                    <div className="fieldTag">Email</div>
                    <input className={"textBox"} type={"text"} />
                    <div className="fieldTag">Message</div>
                    <textarea className="textArea"> </textarea>
                    <div className="sendButton">Send</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}