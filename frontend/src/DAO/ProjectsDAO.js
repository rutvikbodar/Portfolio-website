import axios from 'axios';

export default async function retriveAllProjects(){
    const results = (await axios.get('http://localhost:5000/Portfolio/allProjects')).data;
    return results;
}