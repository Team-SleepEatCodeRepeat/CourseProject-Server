'use strict';

const path = require('path');

const roothPath = path.join(__dirname, '/../');

const connectionStrings = {
    production: process.env.production,
    development: "mongodb://androiddbserver:android1@ds161179.mlab.com:61179/tvshow-server"
}

module.exports = {
    environment: process.env.NODE_ENV || "development",
    connectionString: connectionStrings["development"],
    port: process.env.PORT || 3001,
    roothPath,
    jwtSecret: 'fuckinStupidSecretsEverywhere'
}