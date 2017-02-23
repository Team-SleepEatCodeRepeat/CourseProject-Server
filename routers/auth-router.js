'use strict';

module.exports = ({ app, controllers, config}) => {
    const controller = controllers.auth;
    app.post('/auth/register', controller.registerUser);
    app.post('/auth/login', controller.loginUser);
}