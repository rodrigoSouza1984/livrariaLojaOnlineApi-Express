import express from "express";
import livroController from "../controllers/livro.controller.js"
import autorizacao from "../midleware/autorizacao.js";


const router = express.Router();

router.post("/", autorizacao.authorize('admin'), livroController.createLivro);
router.get("/", autorizacao.authorize('admin', 'public'), livroController.getAll);
router.get("/getByAutorId/:id", autorizacao.authorize('admin', 'public'), livroController.getAllByAutortId);
router.get("/:id", autorizacao.authorize('admin', 'public'), livroController.getById);
router.delete("/:id", autorizacao.authorize('admin'), livroController.deleteLivro);
router.patch("/", autorizacao.authorize('admin'), livroController.update);

export default router