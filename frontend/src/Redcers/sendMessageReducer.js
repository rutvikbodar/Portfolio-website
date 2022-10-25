
export default function sendMessageReducer(state = {}, action){
    if(action.type==="sendMessage"){
        return {...state,...action.payload}
    }
    else{
        return state;
    }
}