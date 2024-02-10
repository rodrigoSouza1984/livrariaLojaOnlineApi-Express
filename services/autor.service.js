import AutorRepository from "../repositories/autor.respository.js"
import livroService from "../services/livro.service.js"

async function createAutor(autor){    
    return await AutorRepository.insertAutor(autor)
}

async function getAll(){
    return await AutorRepository.getAll();
}

async function getById(id){
    return await AutorRepository.getById(id);
}

async function deleteAutor(id){
    const livrosDoAutor = await livroService.getAllByAutortId(id) 
    console.log(livrosDoAutor.length )

    if(livrosDoAutor.length !== 0){
        throw new Error("Ha livros cadastradas por esse Autor")        
    }
    return await AutorRepository.deleteAutor(id);
}

async function update(autor){
    return await AutorRepository.update(autor)
}

export default{
    createAutor,
    getAll,
    getById,
    deleteAutor,
    update
}