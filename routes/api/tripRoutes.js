const router = require('express').Router();
const Trip = require('../../models/Trips');

router.post('/', (req, res) => {
    res.send('post route to trips root works')
});

router.delete('/:id', (req, res) => {
    res.send('delete route to trips/:id works')
});

module.exports = router;