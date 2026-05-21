import { Router } from "express"; 
import { StudentController } from "../controller/student.controller";

const router=Router();

const controller= new StudentController();

router.post("/",controller.create);
router.get("/",controller.getAll);

export default router;