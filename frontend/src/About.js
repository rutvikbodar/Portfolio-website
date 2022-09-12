import './About.css';
import Jarvis from './Jarvis';
import React from 'react';

export default function About(){
    const totalStars = 3;
    
    function provideStars(n){
        const starArray = [];
        for(let i=0;i<n;i++){
            starArray.push(<img className='stars' src='./star.png' key={i}></img>);
        }
        return starArray;
    }

    return (
        <div className='aboutContainer'>
            <div className='introName'>
                <div className='line1'>
                    <div className='box1'>
                        Hi!&nbsp; I Am
                    </div>
                    <div className='box2'>
                        <div className='roleContainer' onClick={null}>
                            Full Stack&nbsp; 
                            {provideStars(totalStars)}
                        </div>
                        
                    </div>
                </div>
                <div className='line2'>
                    <div>
                        Rutvik Bodar
                    </div>
                </div>
            </div>
            <div className='introStats'>
                <div className='dreamer'>
                    &lt;Dreamer /&gt;
                </div>
                <div className='discription'>
                    What does that mean?
                    <br></br>
                    It means what we do is sleep, dream, wake up, start building it!
                </div>
                <div className='resume'>
                    <div className='resume-button' ><a href='./resume.pdf' target={"_blank"}><div className='resume-text'>Download Resume</div></a></div>
                </div>
                <div className='dummy' />
            </div>
            <div className='starTip'>
                <div className='starTab'>
                    <div className='nStars'>{provideStars(1)}</div> 
                    <div className='defination'>
                        <div className='def'>New to technology</div>
                        <div className='eta'>Acheived on : 12 December 2021</div>
                    </div>
                </div>
                <div className='starTab'>
                    <div className='nStars'>{provideStars(2)}</div>
                    <div className='defination'>
                        <div className='def'>Mastered all the core concepts</div>
                        <div className='eta'>Acheived on : 3 March 2022</div>
                    </div>
                </div>
                <div className='starTab'>
                    <div className='nStars'>{provideStars(3)}</div>
                    <div className='defination'>
                        <div className='def'>Able to Create any projects with little bit of searching.</div>
                        <div className='eta'>Acheived on : 24 june 2022</div>
                    </div>
                </div>
                <div className='starTab'>
                    <div className='nStars'>{provideStars(4)}</div>
                    <div className='defination'>
                        <div className='def'>Mastered all advanced concepts and APIs and highly optimized projects..</div>
                        <div className='eta'>Estimated time : November 2022</div>
                    </div>
                </div>
                <div className='starTab'>
                    <div className='nStars'>{provideStars(5)}</div>
                    <div className='defination'>
                        <div className='def'>Sky is the limit</div>
                        <div className='eta'>Estimated time : March 2023</div>
                    </div>
                </div>
            </div>
        </div>
    )
}