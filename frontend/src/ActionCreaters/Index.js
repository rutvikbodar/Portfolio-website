import retriveTotalProjects from "../DAO/NumberOfProjectsDAO";
import retriveAllProjects from "../DAO/ProjectsDAO";

export const numberOfProjects = () => async dispatch => {
    const response = await retriveTotalProjects();
    dispatch({type : 'numberOfProjects',payload : response});
}

export const getAllProjects = () => async dispatch =>{
    const response = await retriveAllProjects();
    dispatch({type : 'getAllProjects', payload : response})
}