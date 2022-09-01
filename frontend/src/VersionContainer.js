import './VersionContainer.css';
import React from 'react';

export default function VersionContainer(props){
    var ind = props.ind;
    const des = props.points.map((item)=><li className='listItem'>{item}</li>);
    return(
     <div className='versionContainer'>
        <div className='versionIndex'>V {ind+1} :</div>
        <div className='versionDes'>&nbsp;{des}</div>
     </div>   
    )
}