const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const cors = require("cors");

module.exports = () => {
    let app = express();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Credentials", true);
        next();
    });
    app.options("*", cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(expressSession({
        secret: "jamse bond 007",
        resave: true,
        saveUninitialized: true
    }));
    return app;
};