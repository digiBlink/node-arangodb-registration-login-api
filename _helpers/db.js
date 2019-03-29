const config = require('config.json');
const arangojs = require('arangojs');

// Connection to ArangoDB
const db = new arangojs.Database({
	url: process.env.ARANGODB_URI || `http://${config.db.host}:${config.db.port}`,
	databaseName: config.db.database
});

db.useBasicAuth(config.db.username, config.db.password);

console.log('🥑 Connected to ArangoDB: http://' + config.db.host + ':' + config.db.port + '/' + config.db.database)

module.exports = {
    User: require('../users/user.model')
};