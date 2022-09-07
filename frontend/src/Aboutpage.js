import React from 'react';
import './Aboutpage.css';
import Footer from './Footer';

export default function AboutPage(){
    return(
        <div>
            <div className='aboutPage'>
                <div className='coffeeContainer'>
                    <img src={"coffee.png"} className={"coffeeImage"} />
                </div>
                <div className='aboutDescription'>
                    <div className='introTitle'>
                        Let me introduce my self
                    </div>
                    <div className='introContent'>
                    <p>
                    I have completed my B.tech degree in mechanical engineering from Vellore institute of technology in may 2022. During the first year, i took some programming courses and found out my deep interest in problem solving and programming. So I started learning about various programming languages and data structures. I am eager to learn new skills and I have a constant desire to keep improving myself. However, the greatest skill I possess is Quick-Learning. Apart from my technical life, i like to read and explore new places and food. 
                    </p>
                    </div>
                    <div className='introTitle'>Why would you care?</div>
                    <div className='introContent'>
                        <p>
                        We are living in a technology-driven world which is continuously changing and improving every second. At this rate, it is very important to keep up with the world. Indeed, there are already many brilliant people in every field. But when technology changes, are they flexible enough to adapt to the changes? That is the real question.
                        </p>
                        <p>
                        Luckily, we have already overcome that problem. For instance, this project was started to be <span className='highlight'>build 2 months after my first search for "what is M.E.R.N." or 3 months after my search for "what is web-development" at all</span>.
                        </p>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}