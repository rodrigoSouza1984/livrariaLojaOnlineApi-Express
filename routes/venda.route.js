import express from "express";
import vendaController from "../controllers/venda.controller.js"
import autorizacao from "../midleware/autorizacao.js";


const router = express.Router();

router.post("/", autorizacao.authorize('admin', 'public'), vendaController.createVenda);
router.get("/", autorizacao.authorize('admin'), vendaController.getAll);
router.get("/getAllByClientetId/:id", autorizacao.authorize('admin', 'public'), vendaController.getAllByClientetId);
router.get("/getAllByLivrotId/:id", autorizacao.authorize('admin'), vendaController.getAllByLivrotId);
router.get("/getAllByAutortId/:id", autorizacao.authorize('admin'), vendaController.getAllByAutortId);
router.get("/:id", autorizacao.authorize('admin'), vendaController.getById);
router.delete("/:id", autorizacao.authorize('admin'), vendaController.deleteVenda);
router.put("/", autorizacao.authorize('admin'), vendaController.update);

export default router



