const express = require('express');
const skillrouter = require('./routers/skill');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/',skillrouter);

app.listen(5000,()=>console.log("server is listning on port 5000......"));
