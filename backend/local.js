const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data");
const dataTwo = require("./dataTwo");

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
    // pageNum === "1" ? res.send(JSON.stringify(data)) : res.send(JSON.stringify(dataTwo));
});


app.listen(port);
console.log(`App is listening on :${port}`);