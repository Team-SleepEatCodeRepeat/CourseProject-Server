'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = ({ config }) => {
    console.log(config.connectionString);
    mongoose.connect(config.connectionString).catch(console.log);

    let db = mongoose.connection;
    db.on('error', (err) => console.log(err));
}