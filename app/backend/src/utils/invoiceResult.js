const { buyerName } = require('./buyerName')
const { providerName } = require('./providerName')
const { statusBuyer } = require('./statusBuyer')

const invoiceResult = async (order) => {
    const result = order.map(async (e) => {

        const object ={
            notaFiscal: e.orderNfId,
            sacado: await buyerName(e.buyerId),
            cedente: await providerName(e.providerId),
            emissao: e.emissionDate,
            value: Number(e.value).toLocaleString('pt-br', {minimumFractionDigits: 2}),
            status: await statusBuyer(e.orderStatusBuyer)
        }
        return object
    })

    return await Promise.all(result)
}


module.exports = { invoiceResult }