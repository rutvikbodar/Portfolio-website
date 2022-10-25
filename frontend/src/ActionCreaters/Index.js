import retriveTotalProjects from "../DAO/NumberOfProjectsDAO";
import retriveAllProjects from "../DAO/ProjectsDAO";
import getCertificates from "../DAO/CertificatesDAO";
import getSkills from '../DAO/skillDAO';
import sendMsg from "../DAO/newMessageDAO";

export const numberOfProjects = () => async dispatch => {
    const response = await retriveTotalProjects();
    dispatch({type : 'numberOfProjects',payload : response});
}

export const getAllProjects = () => async dispatch =>{
    const response = await retriveAllProjects();
    dispatch({type : 'getAllProjects', payload : response})
}

export const getAllCertificates = () => async dispatch => {
    const response = await getCertificates();
    dispatch({type : 'getCertificates', payload : response});
}

export const getAllSkills = () => async dispatch => {
    const response = await getSkills();
    dispatch({type : 'getSkills', payload : response});
}

export const sendMessage = (FormData) => async dispatch => {
    const response = await sendMsg(FormData);
    dispatch({type : 'sendMessage', payload : response});
}