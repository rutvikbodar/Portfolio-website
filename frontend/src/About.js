import './About.css';
import Jarvis from './Jarvis';
import React from 'react';

export default function About(){
    const totalStars = 3;
    
    function provideStars(n){
        const starArray = [];
        for(let i=0;i<n;i++){
            starArray.push(<img className='stars' src='./star.png'></img>);
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
                        <div className='roleContainer'>
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
                    It means what i do is sleep, dream, wake up, start building it!
                </div>
                <div className='resume'></div>
                <div className='dummy'></div>
            </div>
        </div>
    )
}