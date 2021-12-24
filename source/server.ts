import express from 'express';
import router from './routes';
import * as http from "http";

const serverless = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/.netlify/functions/server", router);
app.use("/", router);

/** Server */
/*const httpServer = http.createServer(app);
const PORT: any = 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));*/

module.exports = app;
module.exports.handler = serverless(app);
