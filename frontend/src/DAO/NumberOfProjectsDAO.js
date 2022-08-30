import axios from "axios";

export default async function retriveTotalProjects(){
    const results = (await axios.get('http://localhost:5000/Portfolio/numberOfProjects')).data;
    return results;
}