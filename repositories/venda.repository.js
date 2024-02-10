import VendaModel from "../models/venda.entity.js"
import Cliente from "../models/cliente.entity.js"
import Livro from "../models/livro.entity.js"


async function insertVenda(venda) {
    try {        
        return await VendaModel.create(venda)        
    
    } catch (err) {
        throw err;
    }
}

async function update(venda) {        
    try {        
        await VendaModel.update(venda, { where : { vendaId: venda.vendaId }} )
        return await getById(venda.vendaId)   

    } catch (err) {
        throw err;
    }
}

async function getAll() {
    try{

        return await VendaModel.findAll({
            include: [{model: Cliente}, {model: Livro}]
        })         
        
    }catch(err){
        throw err;
    }   
}

async function getAllByClientetId(clienteId){
    
    try {
        return await VendaModel.findAll({
            where: {
                clienteId: clienteId
            }
        })
    }catch(err){
        throw err;
    }
}

async function getAllByLivrotId(livroId){
    
    try {
        return await VendaModel.findAll({
            where: {
                livroId: livroId
            }
        })
    }catch(err){
        throw err;
    }
}

async function getAllByAutortId(autorId){
    
    try {
        return await VendaModel.findAll({
            include: {
                model: Livro,
            where: {
                autorId: autorId
            }
            }
        })
    }catch(err){
        throw err;
    }
}

async function getById(id) {    
    try {

       return await VendaModel.findByPk(id, {include: [{model: Cliente}, {model: Livro}]})

    } catch (err) {
        throw err;
    } 
}

async function deleteVenda(id) {    
    try {        
        return await VendaModel.destroy({ where: { vendaId: id } })
    } catch (err) {
        throw err;
    } 
}

export default {
    insertVenda,
    getAll,
    getById,
    deleteVenda,
    update,
    getAllByClientetId,
    getAllByLivrotId,
    getAllByAutortId
}