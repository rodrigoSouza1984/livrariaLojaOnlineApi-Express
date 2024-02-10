
import livroInfoRepository from "../repositories/livroInfo.mongo.repository.js"

async function createlivroInfo(livroInfoBody){
    return await livroInfoRepository.createlivroInfo(livroInfoBody)
}

async function updateLivroInfo(id,livroInfoBody){
    return await livroInfoRepository.updateLivroInfo(id, livroInfoBody)
    
}

async function getAll(){     
    return await livroInfoRepository.getAll()    
}

async function getById(livroId){     
    return await livroInfoRepository.getById(livroId)    
}

async function getByLivroId(livroId){        
    return await livroInfoRepository.getbyLivroId(livroId)    
}

async function deleteLivroInfoById(livroId){     
    return await livroInfoRepository.deleteLivroInfoById(livroId)    
}

//PARTE AVALICOES TABELA RELACIONADA COM ESSA NO MONGO DB

async function createAvaliacao(livroId, avaliacao){
    return await livroInfoRepository.createAvaliacao(livroId, avaliacao)
    
}

async function deleteAvaliacao(livroId, index){
    return await livroInfoRepository.deleteAvaliacao(livroId, index)
    
}

export default {
    createlivroInfo,
    updateLivroInfo,
    deleteLivroInfoById,
    getAll,
    getById,
    createAvaliacao,
    getByLivroId,
    deleteAvaliacao
}