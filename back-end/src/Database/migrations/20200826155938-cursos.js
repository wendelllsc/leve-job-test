module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Cursos', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nomeCurso: {
        allowNull: false,
        type: DataTypes.STRING(40)
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.DropTable('Cursos');
  }
};