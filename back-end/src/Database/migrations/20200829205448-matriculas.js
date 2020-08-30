module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      curso_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Cursos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      pessoa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Pessoas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.DropTable('Matriculas');
  }
};