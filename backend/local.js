const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data");

const app = express();
app.use(bodyParser.json());
app.use(cors());



const port = 6701;

app.get("/getData", async (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify(data));
});


app.listen(port);
console.log(`App is listening on :${port}`);