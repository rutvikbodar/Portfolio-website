import { combineReducers } from 'redux';
import numberOfProjectsReducer from './numberOfProjects';
import allProjects from './allProjects';
import allCertificates from './allCertificates';
import allSkillsReducer from './allSkillsReducer';

export default combineReducers({
    numberOfProjects : numberOfProjectsReducer,
    allProjects : allProjects,
    allCertificates : allCertificates,
    allSkills : allSkillsReducer
});