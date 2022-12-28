const { Order } = require('../database/models');

const invoiceService = {
    findAll: async () => {
        const invoices = await Order.findAll();

        return { code: 200, invoices };
    },

};

module.exports = {
    invoiceService,
};