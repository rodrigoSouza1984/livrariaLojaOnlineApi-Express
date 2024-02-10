import Sequelize from "sequelize"
import BancoDeDadosConect from "../repositories/BancoDeDadosConect.js"
import Livro from "./livro.entity.js";
import Cliente from "./cliente.entity.js";

const Venda = BancoDeDadosConect.define('vendas',{
    vendaId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },      

    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    data: {
        type: Sequelize.DATE,
        allowNull: false
    }, 
      
    
}, {underscored: true});
// underscored => para nao dar problema com _ tipo no banco fizemos td com
//underline e aki temos que usar camelCase entao para o sequlize entender que
//client_id = clientId 

Venda.belongsTo(Livro, { foreignKey: "livroId"})

Venda.belongsTo(Cliente, { foreignKey: "clienteId"})

export default Venda;