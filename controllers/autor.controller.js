import AutorService from "../services/autor.service.js"

async function createAutor(req, res, next) {
    try {
        let autor = req.body;
        if (!autor.nome || !autor.telefone || !autor.email) {
            throw new Error("Name, telefone, Email são obrigatorios")
        }
        res.send(await AutorService.createAutor(autor))
    } catch (err) {
        next(err)
    }

}

async function update(req, res, next) {
    try {
        let autor = req.body;
        if (!autor.nome || !autor.telefone || !autor.email) {
            throw new Error("Name, telefone, Email são obrigatorios")
        }
        res.send(await AutorService.update(autor))
    } catch (err) {
        next(err)
    }

}

async function getAll(req, res, next){
    try{
      res.send(await AutorService.getAll())       
    }catch(err){
        next(err)
    }
}

async function getById(req, res, next){
    try{
      let id = req.params.id
      res.send(await AutorService.getById(id))        
    }catch(err){
        next(err)
    }
}

async function deleteAutor(req, res, next){
    try{
      let id = req.params.id
      res.send(await AutorService.deleteAutor(id))        
    }catch(err){
        next(err)
    }
}

export default {
    createAutor,
    getAll,
    getById,
    deleteAutor,
    update      
}