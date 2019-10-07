const express = require('express');

const db = require('../dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
    .from('accounts')
    .then(money => {
        res.status(200).json(money)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
    db.select('*')
    .from('accounts')
    .where('id', '=', req.params.id)
    .first()
    .then(money => {
        res.status(200).json(money)
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/', (req, res) => {
    const accountData = req.body;
    db('accounts')
    .insert(accountData, 'id')
    .then(money => {
        res.status(201).json(money)
    })
    .catch(err => {
        console.log(err)
    })
});

router.put('/:id', (req, res) => {
    db('accounts')
    .where({id: req.params.id})
    .update(req.body)
    .then(money => {
        res.status(200).json(money)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
    db('accounts')
    .where({id: req.params.id})
    .del()
    .then(money => {
        res.status(200).json(money)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;