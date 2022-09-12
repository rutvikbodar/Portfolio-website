import axios from "axios"

export default async function sendMessage(data){
    const result = await axios.post('https://rutvikbodarportfoliobackend.herokuapp.com/contacts/sendmessage',data);
    return result;
}