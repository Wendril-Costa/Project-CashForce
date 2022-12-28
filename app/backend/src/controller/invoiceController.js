const { invoiceService } = require('../service/invoiceService');

const invoiceController = {
    findAll: async (_req, res) => {
        try {
            const { code, invoices } = await invoiceService.findAll();
        
            return res.status(code).json(invoices);
        } catch (error) {
            console.log(error.message);
        
            return res.status(500).json({ message: 'Erro Interno' });
        }
    },
};

module.exports = {
    invoiceController,
};