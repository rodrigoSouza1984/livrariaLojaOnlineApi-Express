import mongoose from "../repositories/mongoConect.js"


const AvaliacaoShcema = new mongoose.Schema({
    nome: {type: String, required: false},
    nota: {type: Number, required: false},
    avaliacao: {type : String, required: false}

}, {collecttion: "livroInfo"})

export default AvaliacaoShcema;