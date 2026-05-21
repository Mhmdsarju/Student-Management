import { Request, Response } from "express";
import { studentService } from "../../../container";

export class StudentController {
    async create(req: Request, res: Response) {
        const student = await studentService.createStudent(req.body);
        res.status(201).json({ success: true, data: student });
    }

    async getAll(req:Request,res:Response){
        const students=await studentService.getStudents();
        res.json({
            success:true,
            data:students
        });
    }

}