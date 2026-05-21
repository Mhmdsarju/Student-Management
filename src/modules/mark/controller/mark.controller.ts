import { Request, Response } from "express";
import { markService } from "../../../container";

export class MarkController {

  async create(req: Request, res: Response) {

    const mark =
      await markService.addMark(req.body);

    res.status(201).json({
      success: true,
      data: mark,
    });
  }

  async getAll(req: Request, res: Response) {

    const marks =
      await markService.getMarks();

    res.json({
      success: true,
      data: marks,
    });
  }
}