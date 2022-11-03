const router = require('express').Router();
const travellerRoutes = require('./travellerRoute');
const locationRoutes = require('./locationRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/traveller', travellerRoutes);
router.use('/trip', tripRoutes);
router.use('/location', locationRoutes);

module.exports = router;
