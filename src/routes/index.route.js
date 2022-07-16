// eslint-disable-next-line no-unused-vars
const awilix = require('awilix');
const $ = require('express-async-handler');
const router = require('express').Router();

/**
 * index routes
 * @param {awilix.AwilixContainer} container ioc container
 * @return {express.Router}
 */
module.exports.loadIndexRoutes = function loadIndexRoutes(container) {
    const indexController = container.resolve('indexController');

    router.route('/get-cart').get(
        $((...args) => indexController.getCart(...args)),
    );

    return router;
};