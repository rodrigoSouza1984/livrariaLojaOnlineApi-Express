import Sequelize from "sequelize"
import BancoDeDadosConect from "../repositories/BancoDeDadosConect.js"
import Autor from "./autor.entity.js"

const Livro = BancoDeDadosConect.define('livros',{
    livroId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },   

    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    },   
    
}, {underscored: true});
// underscored => para nao dar problema com _ tipo no banco fizemos td com
//underline e aki temos que usar camelCase entao para o sequlize entender que
//client_id = clientId 

Livro.belongsTo(Autor, { foreignKey: "autorId"})

export default Livro;