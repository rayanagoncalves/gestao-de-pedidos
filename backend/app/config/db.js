const Sequelize = require('sequelize');
// const sequelizeConnect = new Sequelize('node-auth', 'root', 'root', {dialect: 'mysql', host: 'mysql-auth'});
const sequelizeConnect = new Sequelize('heroku_7aa488ddd03433f', 'ba5b023c05b33c', 'f2485e4c', {dialect: 'mysql', host: 'us-cdbr-east-03.cleardb.com'});
module.exports = {sequelizeConnect, Sequelize};