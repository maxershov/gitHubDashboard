const express = require("express");
const history = require("connect-history-api-fallback");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data");
const dataTwo = require("./dataTwo");
const repoData = require("./repositoryData");


const host = require("../host")

const app = express();
const staticFiles = express.static(path.join(__dirname, '../', "dist"))
app.use(bodyParser.json());
app.use(cors());



const port = 6701;

app.get("/getData/:pageNum", (req, res) => {
    const { pageNum } = req.params;
    if (pageNum === "1") {
        res.send(JSON.stringify(data.data))
    } else {
        res.send(JSON.stringify(dataTwo.dataTwo))
    }
});


app.get("/getRepo/:repoId", (req, res) => {
    const { repoId } = req.params;
    res.send(JSON.stringify(repoData.repositoryData))
});


app.use(staticFiles);
app.use(history());

app.listen(port, host);

app.use(staticFiles)
console.log(`App is listening on ${host}:${port}`);