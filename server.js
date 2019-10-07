const express = require('express');

const db = require('./data/dbConfig.js');
const accountsRouter = require('./data/accounts/accountsRouter')
const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.get('/', (req, res) => {
    res.send('Hello future Adrian')
})

module.exports = server;