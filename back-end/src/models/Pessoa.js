const {DataTypes, Model } = require('sequelize');

class Pessoa extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING(40),
            telefone: DataTypes.STRING(11),
            cpf: DataTypes.STRING(11)},
            {
                sequelize: connection,
                timestamps: false
        })
        Pessoa.associate = function(models) {
            Pessoa.belongsToMany(models.Matriculas, {through: 'Matriculas', foreignKey: 'pessoa_id', as: 'pessoa'})
          };
    }
}
module.exports = Pessoa;