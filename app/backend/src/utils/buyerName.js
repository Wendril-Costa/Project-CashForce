const { Buyer } = require('../database/models');

const buyerName = async (buyerId) => {
    const buyer = await Buyer.findByPk(Number(buyerId))

    return await buyer.name
}

module.exports = { buyerName }