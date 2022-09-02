import axios from 'axios';

export default async function getCertificates(){
    const results = (await axios.get('http://localhost:5000/Protfolio/allCertificates')).data;
    return results;
}