const { Sequelize, DataTypes, Model } = require('sequelize');
const Pessoa = require('../models/Pessoa');
const Curso = require('./Curso');

class Matriculas extends Model{
    static init(connection){
        super.init({
            pessoa_id: DataTypes.INTEGER,
            curso_id: DataTypes.INTEGER
            },
            {
                sequelize: connection,
                timestamps: false
        })
        Matriculas.associate = function(models){
            Matriculas.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa'});
            Matriculas.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso'});
        }
    }
    
}
module.exports = Matriculas;