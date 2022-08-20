const {MongoClient} = require('mongodb');

const url = "mongodb+srv://rutvikbodar:stormborn07@cluster0.rwiiegg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const connectToDb = async()=>{
    try{
        await client.connect().then(()=>console.log("connected to db"));
    } catch(err){
        console.log(err);
    }
}
connectToDb();

module.exports = client;