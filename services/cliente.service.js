import ClienteRepository from "../repositories/cliente.repository.js"
import vendasService from "../services/venda.service.js"
import autorizacao from "../midleware/autorizacao.js"

async function createCliente(cliente){
    return await ClienteRepository.insertCliente(cliente)
}

async function getAll(){    
    return await ClienteRepository.getAll();
}

async function getById(id){
    return await ClienteRepository.getById(id);
}

async function getByEmail(email){
    return await ClienteRepository.getByEmail(email);
}

async function deleteCliente(id){    

    const compraFeitaPeloCliente = await vendasService.getAllByClientetId(id) 
    console.log(compraFeitaPeloCliente.length )

    if(compraFeitaPeloCliente.length !== 0){
        throw new Error("Ha compras cadastradas por esse cliente")        
    }

    return await ClienteRepository.deleteCliente(id);     
}


async function update(cliente){
    return await ClienteRepository.update(cliente)
}

export default{
    createCliente,
    getAll,
    getById,
    deleteCliente,
    update,
    getByEmail
}