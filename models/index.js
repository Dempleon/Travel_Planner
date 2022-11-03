const Location = require('./Locations');
const Trip = require('./Trips');
const Traveller = require('./Traveller');

Traveller.belongsToMany(Location, {
    through: Trip,
})

Location.belongsToMany(Traveller, {
    through: Trip,
})

module.exports = (Traveller, Location);