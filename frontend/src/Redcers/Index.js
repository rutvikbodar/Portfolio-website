import { combineReducers } from 'redux';
import numberOfProjectsReducer from './numberOfProjects';
import allProjects from './allProjects';
import allCertificates from './allCertificates';
import allSkillsReducer from './allSkillsReducer';
import sendMessageReducer from './sendMessageReducer';

export default combineReducers({
    numberOfProjects : numberOfProjectsReducer,
    allProjects : allProjects,
    allCertificates : allCertificates,
    allSkills : allSkillsReducer,
    message : sendMessageReducer
});