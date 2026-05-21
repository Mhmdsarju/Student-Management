import { Router } from "express";
import { TeacherController } from "../controller/teacher.controller";

const router = Router();

const controller = new TeacherController();

router.post("/", controller.create);
router.get("/", controller.getAll);

export default router;