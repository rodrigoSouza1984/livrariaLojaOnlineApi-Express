import LivroRepository from "../repositories/livro.repository.js"

async function createLivro(livro){    
    return await LivroRepository.insertLivro(livro)
}

async function getAll(){
    return await LivroRepository.getAll();
}

async function getAllByAutortId(autorId){
    if(autorId){
        return await LivroRepository.getAllByAutortId(autorId)
    }
    return false
}

async function getById(id){
    return await LivroRepository.getById(id);
}

async function deleteLivro(id){
    return await LivroRepository.deleteLivro(id);
}

async function update(livro){
    return await LivroRepository.update(livro)
}

export default{
    createLivro,
    getAll,
    getById,
    deleteLivro,
    update,
    getAllByAutortId
}