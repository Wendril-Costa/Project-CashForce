const { Provider } = require('../database/models');

const providerName = async (providerId) => {
    const provider = await Provider.findByPk(Number(providerId))

    return await provider.name
}

module.exports = { providerName }