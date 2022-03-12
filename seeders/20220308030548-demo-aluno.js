module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Alunos', [{
      firstName: 'Lais',
      Notas: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Alunos', null, {});
  }
}

