export default function allSkillsReducer(state = [], action){
    if(action.type==="getSkills"){
        return [...state,...action.payload];
    }
    else{
        return state;
    }
}