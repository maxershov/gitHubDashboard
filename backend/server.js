/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const history = require("connect-history-api-fallback");
const expressStaticGzip = require('express-static-gzip');
const helmet = require("helmet");
const path = require("path");

const port = process.env.PORT || 3000;
const staticFiles = expressStaticGzip(path.join(__dirname, '../', "dist"));

const app = express();
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'", "api.github.com", "*.githubusercontent.com", "fonts.googleapis.com", "fonts.gstatic.com"],
        scriptSrc: ["'self'", "example.com"],
        objectSrc: ["'none'"],
        fontSrc: ["'self'", "fonts.googleapis.com", "fonts.gstatic.com"],
        styleSrc: ["'self'", "fonts.googleapis.com", "fonts.gstatic.com"],
        upgradeInsecureRequests: [],
    },
}));
app.use(staticFiles);
app.use(history());
app.listen(port);
app.use(staticFiles)