import { prisma } from "../../../config/prisma";
import { CreateMarkDto } from "../dto/create-mark.dto";
import { IMarkRepository } from "./mark.repository";

export class MarkPrismaRepository
  implements IMarkRepository {

  async create(data: CreateMarkDto) {
    return prisma.mark.create({
      data,
    });
  }

  async findAll() {
    return prisma.mark.findMany({
      include: {
        student: true,
        course: true,
      },
    });
  }
}