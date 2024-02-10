import mongoose from "mongoose"

const url = 'mongodb://localhost:27017/livroInfo';   
mongoose.connect(url, {useNewUrlParser: true});

export default mongoose