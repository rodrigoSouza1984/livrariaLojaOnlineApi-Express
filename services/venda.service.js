import VendaRepository from "../repositories/venda.repository.js"
import livroService from "./livro.service.js"

async function createVenda(venda){  
    const livro = await livroService.getById(venda.livroId)
    
    if(livro.dataValues.estoque === 0){
        throw new Error("Não temos esse livro em estoque")    
    }

    let vendaRealizada = {
        valor: livro.dataValues.valor,
        data: venda.data,
        clienteId: venda.clienteId,
        livroId: venda.livroId 
    }
    
    let vendaFinal = await VendaRepository.insertVenda(vendaRealizada);

    if(vendaFinal){        
        
        let subtraiEstoque = {
            livroId : livro.dataValues.livroId,
            estoque :  livro.dataValues.estoque - 1
        }
        
        let livroAtualizado = await livroService.update(subtraiEstoque)

        return livroAtualizado
    }
}

async function getAll(){
    return await VendaRepository.getAll();
}

async function getAllByClientetId(clienteId){
    if(clienteId){
        return await VendaRepository.getAllByClientetId(clienteId)
    }
    return false
}

async function getAllByLivrotId(livroId){
    if(livroId){
        return await VendaRepository.getAllByLivrotId(livroId)
    }
    return false
}

async function getAllByAutortId(autorId){
    if(autorId){
        return await VendaRepository.getAllByAutortId(autorId)
    }
    return false
}

async function getById(id){
    return await VendaRepository.getById(id);
}

async function deleteVenda(id){
    
    const venda = await VendaRepository.getById(id);
    const livro = await livroService.getById(venda.dataValues.livroId)
    
    let vendaCancelada = await VendaRepository.deleteVenda(id);

    if(vendaCancelada){        
        
        let subtraiEstoque = {
            livroId : livro.dataValues.livroId,
            estoque :  livro.dataValues.estoque + 1
        }

        console.log(subtraiEstoque)
        
        let livroAtualizado = await livroService.update(subtraiEstoque)

        return livroAtualizado
    }
}

async function update(venda){
    return await VendaRepository.update(venda)
}

export default{
    createVenda,
    getAll,
    getById,
    deleteVenda,
    update,
    getAllByClientetId,
    getAllByLivrotId,
    getAllByAutortId
}