import axios from "axios"

export default async function sendMessage(data){
    const result = await axios.post('http://localhost:5000/contacts/sendmessage',data);
    return result;
}