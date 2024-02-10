import express from "express";
import autorController from "../controllers/autor.controller.js"
import autorizacao from "../midleware/autorizacao.js";


const router = express.Router();

router.post("/", autorizacao.authorize('admin'), autorController.createAutor);
router.get("/", autorizacao.authorize('admin'), autorController.getAll);
router.get("/:id", autorizacao.authorize('admin'), autorController.getById);
router.delete("/:id", autorizacao.authorize('admin'), autorController.deleteAutor);
router.put("/", autorizacao.authorize('admin'), autorController.update);

export default router