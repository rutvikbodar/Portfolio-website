const client = require('../utils/mongoUtil');

module.exports.sendMessage = async(req,res) =>{
    const {name,email,message} = req.body;
    console.log(name,email,message);
    res.end("post request received");
}