import axios from "axios";

export default async function retriveTotalProjects(){
    const results = (await axios.get('https://rutvikbodarportfoliobackend.herokuapp.com/Portfolio/numberOfProjects')).data;
    return results;
}