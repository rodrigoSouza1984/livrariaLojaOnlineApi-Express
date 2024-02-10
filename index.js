import express from "express"
import cors from "cors";

import clientesRouter from "./routes/cliente.route.js"
import autoresRouter from "./routes/autor.route.js"
import livrosRouter from "./routes/livro.route.js"
import vendasRouter from "./routes/venda.route.js"
import livroInfoRouter from "./routes/livroInfo.mongo.route.js"

import basicAuth from "express-basic-auth"



const app = express();
app.use(express.json())
app.use(cors())

app.use(basicAuth({
    authorizer: (username, password) => {        

        const userMatches = basicAuth.safeCompare(username, 'admin');
        const pwdMatches = basicAuth.safeCompare(password, 'admin');         

        const userMatches2 = basicAuth.safeCompare(username, username);
        const pwdMatches2 = basicAuth.safeCompare(password, password);       

        return userMatches && pwdMatches || userMatches2 && pwdMatches2 
    }    
}))


app.use("/cliente", clientesRouter);
app.use("/autor", autoresRouter);
app.use("/livro", livrosRouter);
app.use("/venda", vendasRouter);
app.use("/livroInfo", livroInfoRouter);

app.listen(3000, async () => {    
    console.log('Api Online')
});
    
