const client = require('../utils/mongoUtil');

module.exports.getAllProjets = async(req,res)=>{
    await client.connect();
    const cursor = client.db("Projects").collection("ProjectInfo").find({});
    const results = await cursor.toArray();
    res.json(results);
}