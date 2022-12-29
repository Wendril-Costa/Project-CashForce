const { invoiceService } = require('../service/invoiceService');

const invoiceController = {
    findAll: async (_req, res) => {
            const { code, invoices } = await invoiceService.findAll();
            
            return res.status(code).json(invoices);
    },
};

module.exports = {
    invoiceController,
};