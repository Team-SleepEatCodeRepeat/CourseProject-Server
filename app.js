'use strict';

const config = require('./config'),
    app = require('./config/application')(),
    controllers = require('./controllers')({ config }),
    passport = require('passport'),
    db = require('./config/db')({ config });

require('./routers')({ app, controllers, config});

app.listen(config.port);

console.log(`Server is running on port: ${config.port}`);