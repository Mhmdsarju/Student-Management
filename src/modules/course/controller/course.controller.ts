import { Request, Response } from "express";
import { courseService } from "../../../container";

export class CourseController {

  async create(req: Request, res: Response) {

    const course =
      await courseService.createCourse(req.body);

    res.status(201).json({
      success: true,
      data: course,
    });
  }

  async getAll(req: Request, res: Response) {

    const courses =
      await courseService.getCourses();

    res.json({
      success: true,
      data: courses,
    });
  }
}