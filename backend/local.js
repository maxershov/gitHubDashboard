const express = require("express");
const history = require("connect-history-api-fallback");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const host = "localhost";
// const host = require("../host");

const app = express();
const staticFiles = express.static(path.join(__dirname, '../', "dist"))
app.use(bodyParser.json());
app.use(cors());

const port = 6701;

app.use(staticFiles);
app.use(history());

app.listen(port);
// app.listen(port, host);

app.use(staticFiles)
console.log(`App is listening on ${host}:${port}`);