import express from "express";
import livroInfoController from "../controllers/livroInfo.mongo.controller.js"
import autorizacao from "../midleware/autorizacao.js";


const router = express.Router();

router.post("/", autorizacao.authorize('admin'), livroInfoController.createlivroInfo);
router.put("/:_id",autorizacao.authorize('admin'), livroInfoController.updateLivroInfo);
router.get("/", autorizacao.authorize('admin'), livroInfoController.getAll);
router.get("/:_id", autorizacao.authorize('admin'), livroInfoController.getById);
router.get("/getbyLivroId/:livroId", autorizacao.authorize('admin'), livroInfoController.getByLivroId);
router.delete("/:_id", autorizacao.authorize('admin'), livroInfoController.deleteLivroInfoById);
router.post("/avaliacao", autorizacao.authorize('admin', 'public'), livroInfoController.createAvaliacao);
router.delete("/avaliacao/:_id/:index", autorizacao.authorize('admin'), livroInfoController.deleteAvaliacao);


export default router   