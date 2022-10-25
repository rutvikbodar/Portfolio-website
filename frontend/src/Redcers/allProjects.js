export default function allProjectsReducer(state=[],action){
    if(action.type === 'getAllProjects'){
        return [...state,...action.payload];
    }
    else{
        return state;
    }
}