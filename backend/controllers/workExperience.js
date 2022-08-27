const client = require('../utils/mongoUtil');

module.exports.getExperience = async(req,res)=>{
    await client.connect();
    const cursor = client.db("workExperience").collection("technical").find({});
    const result = await cursor.toArray();
    res.json(result);
}