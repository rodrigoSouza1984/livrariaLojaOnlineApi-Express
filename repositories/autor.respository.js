import AutorModel from "../models/autor.entity.js"
import Livro from "../models/livro.entity.js"



async function insertAutor(autor) {
    try {  
        console.log(autor)      
        return await AutorModel.create(autor)        
    
    } catch (err) {
        throw err;
    }
}

async function update(autor) {        
    try {
        console.log('a', autor)
        await AutorModel.update(autor, { where : { autorId: autor.autorId }} )
        return await getById(autor.autorId)   

    } catch (err) {
        throw err;
    }
}

async function getAll() {
    try{

        return await AutorModel.findAll()         
        
    }catch(err){
        throw err;
    }   
}

async function getById(id) {    
    try {

       return await AutorModel.findByPk(id)

    } catch (err) {
        throw err;
    } 
}

async function deleteAutor(id) {    
    try {        
        await AutorModel.destroy({ where: { autorId: id } })
    } catch (err) {
        throw err;
    } 
}

export default {
    insertAutor,
    getAll,
    getById,
    deleteAutor,
    update
}