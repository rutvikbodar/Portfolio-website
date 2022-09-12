import axios from 'axios';

export default async function getCertificates(){
    const results = (await axios.get('https://rutvikbodarportfoliobackend.herokuapp.com/Protfolio/allCertificates')).data;
    return results;
}