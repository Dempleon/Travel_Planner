const router = require('express').Router();
const Traveller = require('../../models/Traveller');

router.get('/', (req, res) => {
    res.send('get route to traveller root works')
});

router.post('/', (req, res) => {
    res.send('post route to traveller root works')
});

router.get('/:id', (req, res) => {
    res.send('get route to traveller/:id works')
});

router.delete('/:id', (req, res) => {
    res.send('delete route to traveller/:id works')
});

module.exports = router