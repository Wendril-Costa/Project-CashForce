module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('buyers', [
      {
        id: 1,
        name: 'SACADO 001',
        tradingName: 'SACADO 001 LTDA',
        cashforceTax: '0',
        responsibleName: null,
        responsibleEmail: null,
        responsiblePhone: null,
        responsibleMobile: null,
        website: null,
        postalCode: null,
        address: null,
        number: null,
        complement: null,
        neighborhood: null,
        city: null,
        state: null,
        phoneNumber: null,
        situation: null,
        situationDate: null,
        createdAt: '2020-10-29 21:20:33',
        updatedAt: '2020-10-29 21:20:33',
        cnpjId: 1,
        confirm: 1,
        email: null
      }
    ], {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('buyers', null, {})
  }
}
