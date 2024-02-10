import LivroModel from "../models/livro.entity.js"
import Autor from "../models/autor.entity.js"


async function insertLivro(livro) {
    try {        
        return await LivroModel.create(livro)        
    
    } catch (err) {
        throw err;
    }
}

async function update(livro) {        
    try {        
        await LivroModel.update(livro, { where : { livroId: livro.livroId }} )
        return await getById(livro.livroId)   

    } catch (err) {
        throw err;
    }
}

async function getAll() {
    try{

        return await LivroModel.findAll({
            include: [{model: Autor}]
        })         
        
    }catch(err){
        throw err;
    }   
}

async function getAllByAutortId(autorId){
    
    try {
        return await LivroModel.findAll({
            where: {
                autorId: autorId
            }
        })
    }catch(err){
        throw err;
    }
}

async function getById(id) {    
    try {

       return await LivroModel.findByPk(id, {include: [{model: Autor}]})

    } catch (err) {
        throw err;
    } 
}

async function deleteLivro(id) {    
    try {        
        await LivroModel.destroy({ where: { livroId: id } })
    } catch (err) {
        throw err;
    } 
}

export default {
    insertLivro,
    getAll,
    getById,
    deleteLivro,
    update,
    getAllByAutortId
}