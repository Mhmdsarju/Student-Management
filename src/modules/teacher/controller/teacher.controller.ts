import { Request, Response } from "express";
import { teacherService } from "../../../container";

export class TeacherController {

  async create(req: Request, res: Response) {

    const teacher =
      await teacherService.createTeacher(req.body);

    res.status(201).json({
      success: true,
      data: teacher,
    });
  }

  async getAll(req: Request, res: Response) {

    const teachers =
      await teacherService.getTeachers();

    res.json({
      success: true,
      data: teachers,
    });
  }
}