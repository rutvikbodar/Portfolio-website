import axios from 'axios';

export default async function retriveAllProjects(){
    const results = (await axios.get('https://rutvikbodarportfoliobackend.herokuapp.com/Portfolio/allProjects')).data;
    return results;
}