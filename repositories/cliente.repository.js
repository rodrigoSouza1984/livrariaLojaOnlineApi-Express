import ClienteModel from "../models/cliente.entity.js"


async function insertCliente(cliente) {
    try {
        const clienteCadastrado = await ClienteModel.create(cliente)
        
        return {
            nome: clienteCadastrado.nome,
            email: clienteCadastrado.email,
            telefone: clienteCadastrado.telefone,
            endereco: clienteCadastrado.endereco
        }
    
    } catch (err) {
        throw err;
    }
}

async function update(cliente) {        
    try {
        await ClienteModel.update(cliente, { where : { clienteId: cliente.clienteId }} )
        
        const a = await ClienteModel.findByPk(cliente.clienteId)      

        const {senha, ...result} = a.dataValues        

        return result

    } catch (err) {
        throw err;
    }
}

async function getAll() {
    try{
        const clientes =  await ClienteModel.findAll()

        let list = []

        clientes.forEach(r => {
            const {senha, ...rest} = r.dataValues              
            list.push(rest)                     
        })  
        
        return clientes
        
    }catch(err){
        throw err;
    }   
}

async function getById(id) {    
    try {
       const cliente =  await ClienteModel.findByPk(id) 

       const {senha, ...rest} = cliente.dataValues

       return rest
    } catch (err) {
        throw err;
    } 
}

async function getByEmail(email) {    
    try {

       const clientes =  await ClienteModel.findAll({where:{email : email}}) 
        
       return clientes

    } catch (err) {
        throw err;
    } 
}

async function deleteCliente(id) {    
    try {
        await ClienteModel.destroy({ where: { clienteId: id } })
    } catch (err) {
        throw err;
    } 
}

export default {
    insertCliente,
    getAll,
    getById,
    deleteCliente,
    update,
    getByEmail
}