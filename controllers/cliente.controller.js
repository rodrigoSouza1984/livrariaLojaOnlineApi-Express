import ClienteService from "../services/cliente.service.js"
import ClienteModel from "../models/cliente.entity.js"



async function createCliente(req, res, next) {
    try {
        let cliente = req.body;
        if (!cliente.nome || !cliente.senha || !cliente.telefone || !cliente.email || !cliente.endereco) {
            throw new Error("Name, senha, telefone, Email e endereco são obrigatorios")
        }
        res.send(await ClienteService.createCliente(cliente))
    } catch (err) {
        next(err)
    }

}

async function update(req, res, next) {
    try {
        let cliente = req.body;
        
        if (!cliente.clienteId || !cliente.nome || !cliente.telefone || !cliente.email || !cliente.endereco) {
            throw new Error("Nome, CPF, telefone, Email e endereco são obrigatorios")
        }

        const user =await ClienteModel.findByPk(cliente.clienteId)   
        console.log(res.req.auth.user, user.dataValues.email, 'qqqqqqqq')

        if(res.req.auth.user === 'admin' && res.req.auth.password === 'admin'){
            return res.send(await ClienteService.update(cliente))            
        }
        
        if(res.req.auth.user !== user.dataValues.email ||  res.req.auth.password !== user.dataValues.senha){
            throw new Error(" Unauthorized!!! Apenas atualizacao de seus dados")
        }else{
            res.send(await ClienteService.update(cliente))
        }        
    } catch (err) {
        next(err)
    }

}

async function getAll(req, res, next){
    try{  
        console.dir(res.req.auth)
        res.send(await ClienteService.getAll())     
      
    }catch(err){
        next(err)
    }
}

async function getById(req, res, next){
    try{
      let id = req.params.id
      res.send(await ClienteService.getById(id))        
    }catch(err){
        console.log(err)
    }
}

async function getByEmail(req, res, next){
    try{
      let email = req.params.email
      res.send(await ClienteService.getByEmail(email))        
    }catch(err){
        next(err)
    }
}

async function deleteCliente(req, res, next){
    try{
      let id = req.params.id
      res.send(await ClienteService.deleteCliente(id))        
    }catch(err){
        next(err)
    }
}

export default {
    createCliente,
    getAll,
    getById,
    deleteCliente,
    update,
    getByEmail 
}

