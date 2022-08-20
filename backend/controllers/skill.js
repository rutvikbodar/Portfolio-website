 
 const client = require('../utils/mongoUtil')

module.exports.getSkills = async(req,res)=>{
    await client.connect();
    const cursor = await client.db("skillhive").collection("skills").find({});
    results = await cursor.toArray();
    res.json(results);
 }