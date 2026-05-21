import { IMarkRepository } from "../repository/mark.repository";
import { CreateMarkDto } from "../dto/create-mark.dto";

export class MarkService {

  constructor(
    private markRepository: IMarkRepository
  ) {}

  async addMark(data: CreateMarkDto) {

    if (data.score < 0 || data.score > 100) {
      throw new Error("Invalid score");
    }

    return this.markRepository.create(data);
  }

  async getMarks() {
    return this.markRepository.findAll();
  }
}