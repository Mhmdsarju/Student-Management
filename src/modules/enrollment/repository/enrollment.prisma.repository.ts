import { prisma } from "../../../config/prisma";
import { CreateEnrollmentDto } from "../dto/create-enrollment.dto";
import { IEnrollmentRepository } from "./enrollment.repository";

export class EnrollmentPrismaRepository
  implements IEnrollmentRepository {

  async create(data: CreateEnrollmentDto) {
    return prisma.enrollment.create({
      data,
    });
  }

  async findAll() {
    return prisma.enrollment.findMany({
      include: {
        student: true,
        course: true,
      },
    });
  }
}