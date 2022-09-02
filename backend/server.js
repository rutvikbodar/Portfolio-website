const express = require('express');
const skillrouter = require('./routers/skill');
const numberOfProjectsRouter = require("./routers/numberOfProjects");
const experienceRouter = require('./routers/workExperience');
const allProjectsRoute = require('./routers/allProjects');
const allCertificates = require('./routers/allCertificates');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/',skillrouter);
app.use('/Portfolio/numberOfProjects',numberOfProjectsRouter);
app.use('/Portfolio/allProjects',allProjectsRoute);
app.use('/Portfolio/experience',experienceRouter);
app.use('/Protfolio/allCertificates',allCertificates);
app.listen(5000,()=>console.log("server is listning on port 5000......"));
