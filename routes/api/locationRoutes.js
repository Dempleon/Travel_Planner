const router = require('express').Router();
const Location = require('../../models/Locations');

router.get('/', (req, res) => {
    res.send('get route to location root works')
});

router.post('/', (req, res) => {
    res.send('post route to location root works')
});

router.get('/:id', (req, res) => {
    res.send('get route to location/:id works')
});

router.delete('/:id', (req, res) => {
    res.send('delete route to location/:id works')
});

module.exports = router;