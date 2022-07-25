var users = require('./data/users.json');
var products = require('./data/products.json');
var vehicles = require('./data/vehicles.json');

module.exports = function() {
    return {
        users: users.users,
        products: products.products.data.items,
        vehicles: vehicles.vehicles,
    }
}