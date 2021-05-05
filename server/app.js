'use strict';
const express = require('express');
const open = require("open");
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(cors())
// app.use(express.static('docs'));

// create express app


// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route

// Require routes
const accountsRoutes = require('./routes/accounts.routes');
const transactionsRoutes = require('./routes/transactions.routes');


// using as middleware
app.use('/api/v1/accounts', accountsRoutes)
app.use('/api/v1/transactions', transactionsRoutes)

app.set('port', process.env.PORT || 8000);
app.set('ip', process.env.NODEJS_IP || '127.0.0.1');

app.listen(app.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
    open("http://localhost:8000");

});