const client = require('../utils/mongoUtil');

module.exports.getExperience = async(req,res)=>{
    await client.connect();
    const techCursor = client.db("workExperience").collection("technical").find({});
    const techResult = await techCursor.toArray();
    const socCursor = client.db("workExperience").collection("social").find({});
    const socResult = await socCursor.toArray();
    res.json({techExp : techResult,socExp : socResult});
}