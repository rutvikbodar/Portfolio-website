import { combineReducers } from 'redux';
import numberOfProjectsReducer from './numberOfProjects';
import allProjects from './allProjects';

export default combineReducers({
    numberOfProjects : numberOfProjectsReducer,
    allProjects : allProjects
});