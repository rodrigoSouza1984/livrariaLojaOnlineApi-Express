import Sequelize from "sequelize"
import BancoDeDadosConect from "../repositories/bancoDeDadosConect.js"

const Autor = BancoDeDadosConect.define('autores',{
    autorId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },   
    
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },    

    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
}, {underscored: true});
// underscored => para nao dar problema com _ tipo no banco fizemos td com
//underline e aki temos que usar camelCase entao para o sequlize entender que
//client_id = clientId 

export default Autor;