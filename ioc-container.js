/* eslint-disable max-len */
const awilix = require('awilix');
const IndexController = require('./src/controllers/index.controller');
const IndexService = require('./src/services/index.service');
const CartRepository = require('./src/repositories/cart.repository');

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
    indexController: awilix.asClass(IndexController),
    indexService: awilix.asClass(IndexService),
    cartRepository: awilix.asValue(CartRepository),
});


module.exports = container;