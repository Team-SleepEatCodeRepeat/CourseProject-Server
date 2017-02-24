'use strict';

const jwt = require('jwt-simple'),
    User = require('./../models/user'),
    config = require('./../config');

let getToken = (headers) => {
    if (headers && headers.authorization.split(' ')) {
        let parted = headers.split(' ');
        if (parted.length = 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};



module.exports = ({config}) => {
    return {
        registerUser(req, res) {
            const body = req.body;
            console.log(body.username);

            const create = (newUser) => {
                       User.create(newUser, (err, user) => {
                        if(err) {
                            res.statusMessage = "error";
                            res.sendStatus(404).end();
                        } else {
                            let result = {
                                username: user.username,
                                password: user.password,
                                _id: user._id
                            };

                            res.json({ result })
                        }
                    });
            }

            User.findOne({ username: body.username }, (err, user) => {
                if (err) {
                    res.json("error");
                }

                if (user) {
                    res.json("user already exists");
                } else {
                    const newUser ={
                        username: body.username,
                        password: body.password
                    };
                    create(newUser);
                    // User.create(body, (err, newUser) => {
                    //     if (err) {
                    //         res.statusMessage = "Unable to parse information";
                    //         res.sendStatus(404).end();
                    //     } else {
                    //         let result = {
                    //             username: newUser.username,
                    //             password: newUser.password,
                    //             _id: newUser._id
                    //         };

                    //         res.json({ result });
                    //     }
                    // });
                }
            });
        },
        loginUser(req, res) {
            const body = req.body;
            User.findOne({ username: body.username, password: body.password }, (err, user) => {
                if (err) {
                    res.statusMessage = "error";
                    res.sendStatus(404).end();
                    return;
                };

                if (!user) {
                    res.statusMessage = "Invalid username or password";
                    res.sendStatus(404).end();
                } else {
                    let result = {
                        username: user.username,
                        _id: user._id
                    }

                    res.json({ user });
                }
            });
        },
    }
}
