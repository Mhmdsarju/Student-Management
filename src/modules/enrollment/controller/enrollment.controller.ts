import { Request, Response } from "express";
import { enrollmentService } from "../../../container";

export class EnrollmentController {

  async create(req: Request, res: Response) {

    const enrollment =
      await enrollmentService.enrollStudent(req.body);

    res.status(201).json({
      success: true,
      data: enrollment,
    });
  }

  async getAll(req: Request, res: Response) {

    const enrollments =
      await enrollmentService.getEnrollments();

    res.json({
      success: true,
      data: enrollments,
    });
  }
}