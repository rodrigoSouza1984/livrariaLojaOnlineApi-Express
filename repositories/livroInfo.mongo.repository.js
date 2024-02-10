import livroInfoModel from '../models/livroInfo.entity.js'

async function createlivroInfo(livroInfoBody){
    try{
        const livroInfo = new livroInfoModel(livroInfoBody);

        return  await livroInfo.save()
    }catch(err){
        throw err
    }    
}

async function updateLivroInfo(id, livroInfoBody){
    try{
        return await livroInfoModel.findByIdAndUpdate({'_id': id}, livroInfoBody, {new: true})
    }catch(err){
        throw err
    }
}

async function getAll(productId){
    try{
        return await livroInfoModel.find()
    }catch(err){
        throw err
    }
}

async function getById(livroInfoId){
    try{
        return await livroInfoModel.findById({'_id':livroInfoId})
    }catch(err){
        throw err
    }
}

async function getbyLivroId(livroId){
    try{        
        return await livroInfoModel.findOne({'livroId':livroId})
    }catch(err){
        throw err
    }
}

async function deleteLivroInfoById(livroInfoId){
    try{
        return await livroInfoModel.deleteOne({'_id':livroInfoId})
    }catch(err){
        throw err
    }
}

//PARTE AVALICOES TABELA RELACIONADA COM ESSA NO MONGO DB

async function createAvaliacao( livroId, avaliacao){
    try{
        const livroInfo = await getbyLivroId(livroId) 

        livroInfo.avaliacoes.push(avaliacao)    

        return await this.updateLivroInfo(livroInfo._id, livroInfo)
    }catch(err){
        throw err
    }
}

async function deleteAvaliacao(livroId, index){
    try{     
            
        const livroInfo = await getbyLivroId(livroId) 
        console.log(livroInfo.avaliacoes,index, 'www') 

        livroInfo.avaliacoes.splice(index, 1)        
        return await this.updateLivroInfo(livroInfo._id, livroInfo)

    }catch(err){
        throw err
    }
}

export default {
    createlivroInfo,
    updateLivroInfo,
    deleteLivroInfoById,
    getAll,
    getById,
    createAvaliacao,
    getbyLivroId,
    deleteAvaliacao
}
