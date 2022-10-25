
export default function numberOfProjectsReducer(state = 0, action){
    if(action.type=='numberOfProjects'){
        state = action.payload;
        return state;
    }
    else return state;
}