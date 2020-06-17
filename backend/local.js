const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data");
const dataTwo = require("./dataTwo");
const repoData = require("./repositoryData");


const app = express();
app.use(bodyParser.json());
app.use(cors());



const port = 6701;

app.get("/getData/:pageNum", (req, res) => {
    const { pageNum } = req.params;
    console.log(pageNum)
    if (pageNum === "1") {
        res.send(JSON.stringify(data.data))
    } else {
        res.send(JSON.stringify(dataTwo.dataTwo))
    }
});


app.get("/getRepo/:repoId", (req, res) => {
    const { repoId } = req.params;
    res.send(JSON.stringify(repoData.repositoryData))
}
);


app.listen(port);
console.log(`App is listening on :${port}`);