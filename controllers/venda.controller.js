import VendaService from "../services/venda.service.js"
import ClienteModel from "../models/cliente.entity.js"

async function createVenda(req, res, next) {
    try {
        let venda = req.body;
        if (!venda.data || !venda.clienteId || !venda.livroId) {
            throw new Error("data, id do cliente, e id do livro são obrigatorios")
        }
        res.send(await VendaService.createVenda(venda))
    } catch (err) {
        next(err)
    }

}

async function update(req, res, next) {
    try {
        let venda = req.body;
        if (!venda.valor || !venda.data || !venda.clienteId || !venda.livroId) {
            throw new Error("Valor, data, id do cliente, e id do livro são obrigatorios")
        }
        res.send(await VendaService.update(venda))
    } catch (err) {
        next(err)
    }

}

async function getAll(req, res, next){
    try{
      res.send(await VendaService.getAll())       
    }catch(err){
        next(err)
    }
}

async function getAllByClientetId(req, res, next){
    try{    
      let id = req.params.id

      const user =await ClienteModel.findByPk(id)   
        console.log(res.req.auth.user, user.dataValues.email, 'qqqqqqqq')

        if(res.req.auth.user === 'admin' && res.req.auth.password === 'admin'){
            res.send(await VendaService.getAllByClientetId(id))            
        }
        
        if(res.req.auth.user !== user.dataValues.email ||  res.req.auth.password !== user.dataValues.senha){
            throw new Error(" Unauthorized!!! Apenas suas vendas")
        }else{
            res.send(await VendaService.getAllByClientetId(id))
        }   
             
    }catch(err){                

        next(err)
    }
}

async function getAllByLivrotId(req, res, next){
    try{
      let id = req.params.id
      res.send(await VendaService.getAllByLivrotId(id))       
    }catch(err){
        next(err)
    }
}

async function getAllByAutortId(req, res, next){
    try{
      let id = req.params.id
      res.send(await VendaService.getAllByAutortId(id))       
    }catch(err){
        next(err)
    }
}

async function getById(req, res, next){
    try{
      let id = req.params.id
      res.send(await VendaService.getById(id))        
    }catch(err){
        next(err)
    }
}

async function deleteVenda(req, res, next){
    try{
      let id = req.params.id
      res.send(await VendaService.deleteVenda(id))        
    }catch(err){
        next(err)
    }
}

export default {
    createVenda,
    getAll,
    getById,
    deleteVenda,
    update,
    getAllByClientetId,
    getAllByLivrotId,
    getAllByAutortId

}