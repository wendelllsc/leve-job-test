module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Pessoas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING(40)
      },
      telefone: {
        allowNull: false,
        type: DataTypes.STRING(11)
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING(11)
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pessoas');
  }
};