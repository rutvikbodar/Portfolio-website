import './CertificationContainer.css';
import React from "react";
import Certi from './Certi';
import getCertificates from './DAO/CertificatesDAO';

export default function CertificationContainer(){

    var [certificates,setCertificates] = React.useState([]);
    const populateCertificates = async()=>{
        const result =  await getCertificates();
        setCertificates(result);
    }

    React.useState(()=>{
        populateCertificates();
    },[certificates]);
    const certiProvider = certificates.map((item)=>{return <Certi name={item.name} by={item.by} link={item.link} />});

    return(
        <div className='certificationContainer'>
            {certiProvider}
        </div>
    )
}