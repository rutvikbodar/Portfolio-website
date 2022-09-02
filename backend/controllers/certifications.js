const client = require('../utils/mongoUtil');
 
module.exports.getAllCertificates = async(req,res) =>{
    await client.connect();
    const cursor = await client.db("certification").collection("certificates").find({});
    const results = await cursor.toArray();
    res.json(results);
}