import './Certi.css';
import React from 'react';

export default function Certi(props){
    return(
        <div className='certi'>
            <div className='name'>{props.name}</div>
            <div className='org'><span className='by'>By </span><div className='orgLogo'><img src={props.by} /></div></div>
            <a href={props.link} target={"_blank"}><div className='linkButton'>View certificate</div></a>
        </div>
    )
}