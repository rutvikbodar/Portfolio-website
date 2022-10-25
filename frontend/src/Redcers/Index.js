import { combineReducers } from 'redux';
import numberOfProjectsReducer from './numberOfProjects';

export default combineReducers({
    numberOfProjects : numberOfProjectsReducer
});