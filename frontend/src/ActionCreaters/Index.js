import retriveTotalProjects from "../DAO/NumberOfProjectsDAO";

export const numberOfProjects = () => async dispatch => {
    const response = await retriveTotalProjects();
    dispatch({type : 'numberOfProjects',payload : response});
}