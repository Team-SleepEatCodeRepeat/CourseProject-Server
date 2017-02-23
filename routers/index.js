const fs = require('fs'),
    path = require('path');

module.exports = ({ app, controllers, config }) => {
    fs.readdirSync('./routers/')
    .filter(r => r.includes('-router'))
    .forEach(file => {
        console.log(path.join(__dirname, file));
        console.log(require(path.join(__dirname, file)));
        require(path.join(__dirname, file))({ app, controllers, config });
    });

    app.all("*", (req, res) => {
        res.status(404);
        res.json(404);
        res.end();
    });
}