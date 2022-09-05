const client = require("../utils/mongoUtil");

module.exports.getNumberOfProjects = async(req,res)=>{
    await client.connect();
    const cursor = client.db("Projects").collection("numberOfProjects").find({});
    const results = await cursor.toArray();
    res.json(results[0]["numberOfProjects"]);
}