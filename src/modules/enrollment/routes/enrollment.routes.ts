import { Router } from "express";
import { EnrollmentController } from "../controller/enrollment.controller";

const router = Router();

const controller = new EnrollmentController();

router.post("/", controller.create);
router.get("/", controller.getAll);

export default router;