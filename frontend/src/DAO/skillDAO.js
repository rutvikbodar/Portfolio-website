
import axios from 'axios';

export default async function retriveSkillData(){
    const skills = (await axios.get('http://localhost:5000/')).data;
    return skills;
}