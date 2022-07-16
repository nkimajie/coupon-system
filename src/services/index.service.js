/* eslint-disable max-len */
const AppError = require('../../helpers/error');

module.exports = class EnrollmentService {
    /**
     * app service constructor
     * @param { `cartRepository` } cartRepository
     */
    constructor({ cartRepository }) {
        this.cartRepository = cartRepository;
    };



    /**
     * add shop to business
     * @param {object} data
     */
    async addBusinessShop(data) {
        const shop = await this.BusinessShopRepository.create({ ...data });
        return _.omit(shop.toJSON(), ['createdAt', 'updatedAt']);
    }


};