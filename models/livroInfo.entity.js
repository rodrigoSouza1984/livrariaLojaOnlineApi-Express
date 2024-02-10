import mongoose from "../repositories/mongoConect.js"
import AvaliacaoShcema from "./livroInfo.avaliacoes.entity.js"

const LivroInfoShcema = new mongoose.Schema({
    livroId: {type: Number, required: true},
    descricao: {type: String, required: true},
    paginas: {type: Number, required: false},
    editora: {type: String, required: false},    
    avaliacoes: [AvaliacaoShcema],
})


export default mongoose.model('livroInfo', LivroInfoShcema);