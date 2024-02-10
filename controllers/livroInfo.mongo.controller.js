import livroInfoService from "../services/livroInfo.mongo.service.js"

async function createlivroInfo(req, res, next) {    
    try {
        let livroInfo = req.body; 
        
        if(!livroInfo.livroId){
            throw new Error("Livro Id é obrigatório")
        }
                
        res.send(await livroInfoService.createlivroInfo(livroInfo))
    } catch (err) {
        next(err)
    }
}

async function updateLivroInfo(req, res, next){
    console.log(req.params)
    try {
        let livroInfo = req.body; 
        let id = req.params._id
        
        if(!livroInfo.livroId){
            throw new Error("Livro Id é obrigatório")
        }

        res.send(await livroInfoService.updateLivroInfo(id, livroInfo))
    } catch (err) {
        next(err)
    }
}

async function getAll(req, res, next){
    try{           
      res.send(await livroInfoService.getAll())        
    }catch(err){
        next(err)
    }
}

async function getById(req, res, next){
    try{
      let id = req.params._id      
      res.send(await livroInfoService.getById(id))        
    }catch(err){
        next(err)
    }
}

async function getByLivroId(req, res, next){
    try{
      let id = req.params.livroId            
      res.send(await livroInfoService.getByLivroId(id))        
    }catch(err){
        next(err)
    }
}

async function deleteLivroInfoById(req, res, next){
    try{
      let id = req.params._id      
      res.send(await livroInfoService.deleteLivroInfoById(id))        
    }catch(err){
        next(err)
    }
}

//PARTE AVALICOES TABELA RELACIONADA COM ESSA NO MONGO DB

async function createAvaliacao(req, res, next){
    try {
        let body = req.body;                
        
        if(!body.livroId){
            throw new Error("livro Id e avaliacao são obrigatório")
        }        

        res.send(await livroInfoService.createAvaliacao(body.livroId,body.avaliacoes))       
    } catch (err) {
        next(err)
    }
}

async function deleteAvaliacao(req, res, nex){
    try{        
        await livroInfoService.deleteAvaliacao(req.params._id, req.params.index);//usei find mais pode ser findOne tb para achar so um
        res.end();
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
    getByLivroId,
    deleteAvaliacao
}