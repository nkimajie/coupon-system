module.exports = class IndexController {
    /**
     * IndexController Constructor
     * @param {{indexService: indexService}} param0
     */
    constructor({ indexService }) {
        this.indexService = indexService;
    };

    /**
     * get all cart
     * @param {express.object} req
     * @param {express.object} res
     * @return {object} json  with user data
     */
    async getCart(req, res) {
        return res.data(await this.indexService.getCart());
    }

};