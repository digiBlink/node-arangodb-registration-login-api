require('rootpath')();
const config = require('config.json');
const arangojs = require('arangojs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

// Setup express server
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Connection to ArangoDB
const db = new arangojs.Database({
	url: `http://${config.db.host}:${config.db.port}`,
	databaseName: config.db.database
});

db.useBasicAuth(config.db.username, config.db.password);

// use JWT auth to secure the api
app.use(jwt());

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 8080) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
