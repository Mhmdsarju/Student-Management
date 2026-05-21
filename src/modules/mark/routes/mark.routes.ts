import { Router } from "express";
import { MarkController } from "../controller/mark.controller";

const router = Router();

const controller = new MarkController();

router.post("/", controller.create);
router.get("/", controller.getAll);

export default router;