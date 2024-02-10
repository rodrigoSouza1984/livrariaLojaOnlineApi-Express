import express from "express";
import clienteController from "../controllers/cliente.controller.js"
import autorizacao from "../midleware/autorizacao.js";

const router = express.Router();

router.post("/",autorizacao.authorize('admin'), clienteController.createCliente);
router.get("/", autorizacao.authorize('admin'), clienteController.getAll);
router.get("/:id",autorizacao.authorize('admin'), clienteController.getById);
router.get("/getByEmail/:email",autorizacao.authorize('admin'), clienteController.getByEmail);
router.delete("/:id",autorizacao.authorize('admin'), clienteController.deleteCliente);
router.put("/",autorizacao.authorize('admin', 'public'), clienteController.update);



export default router