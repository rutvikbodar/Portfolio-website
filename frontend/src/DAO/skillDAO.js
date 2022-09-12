
import axios from 'axios';

export default async function retriveSkillData(){
    const skills = (await axios.get('https://rutvikbodarportfoliobackend.herokuapp.com/Portfolio/allSkills')).data;
    return skills;
}