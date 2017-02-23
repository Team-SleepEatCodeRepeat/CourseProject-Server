const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username: { type: String },
    passowrd: { type: String }
});

let User = mongoose.model("user", userSchema);

module.exports = User;