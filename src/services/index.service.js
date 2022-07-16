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
     * get all cart item
     * @return {object} data
     */
    async getAllCartItem() {
        return await this.cartRepository.findAll();
    }

    /**
     * add cart item
     * @return {object} data
     */
    async addCartItem(data) {
        return await this.cartRepository.create({...data});
    }

     /**
     * cart balance
     * @return {object} data
     */
      async getCartBalance() {
        return await this.cartRepository.getCartBalance();
    }


};