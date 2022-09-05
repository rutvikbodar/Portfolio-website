const client = require('../utils/mongoUtil');

module.exports.sendMessage = async(req,res) =>{
    const {name,email,message} = req.body;
    await client.connect();
    const result = await client.db("Messages").collection("allMessages").insertOne({
        "name" : name,
        "email" : email,
        "message" : message,
        "time" : Date.now()
    });
    res.json(result);
}