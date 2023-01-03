const { stats } = require('../types/statsBuyer')

const statusBuyer = async (orderstatusBuyer) => {
    return stats[Number(orderstatusBuyer)]
}

module.exports = { statusBuyer }