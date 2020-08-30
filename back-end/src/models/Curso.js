const { Sequelize, DataTypes, Model } = require('sequelize');

class Curso extends Model{
    static init(connection){
        super.init({
            nomeCurso: DataTypes.STRING(40)},
            {
                sequelize: connection,
                timestamps: false
        })
        Curso.associate = function(models) {
            Curso.belongsToMany(models.Matriculas, {through: 'Matriculas', foreignKey: 'curso_id', as: 'curso'})
          };
    }
}
module.exports = Curso;