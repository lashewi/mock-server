var users = require('./data/users.json');
var products = require('./data/products.json');

module.exports = function() {
    return {
        users: users.users,
        products: products.products.data.items,
    }
}