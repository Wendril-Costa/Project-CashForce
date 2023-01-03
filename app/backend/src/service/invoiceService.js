const { Order } = require('../database/models');

const { invoiceResult } = require('../utils/invoiceResult')

const invoiceService = {
    findAll: async () => {
        const order = await Order.findAll();
        const invoices = await invoiceResult(order);

        return { code: 200, invoices };
    },

};

module.exports = {
    invoiceService,
};