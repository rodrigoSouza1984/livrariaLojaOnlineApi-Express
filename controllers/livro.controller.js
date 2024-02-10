import LivroService from "../services/livro.service.js"

async function createLivro(req, res, next) {
    try {
        let livro = req.body;
        if (!livro.nome || !livro.valor || !livro.estoque || !livro.autorId) {
            throw new Error("Name, valor, estoque e id do autor são obrigatorios")
        }
        res.send(await LivroService.createLivro(livro))
    } catch (err) {
        next(err)
    }

}

async function update(req, res, next) {
    try {
        let livro = req.body;    
        if (livro.nome || livro.autorId) {
            throw new Error("Nome ou autor não pode ser trocado")
        }
    
        res.send(await LivroService.update(livro))
    } catch (err) {
        next(err)
    }

}

async function getAll(req, res, next){
    try{
      res.send(await LivroService.getAll())       
    }catch(err){
        next(err)
    }
}

async function getAllByAutortId(req, res, next){
    try{
      let id = req.params.id
      res.send(await LivroService.getAllByAutortId(id))       
    }catch(err){
        next(err)
    }
}

async function getById(req, res, next){
    try{
      let id = req.params.id
      res.send(await LivroService.getById(id))        
    }catch(err){
        next(err)
    }
}

async function deleteLivro(req, res, next){
    try{
      let id = req.params.id
      res.send(await LivroService.deleteLivro(id))        
    }catch(err){
        next(err)
    }
}

export default {
    createLivro,
    getAll,
    getById,
    deleteLivro,
    update,
    getAllByAutortId   
}