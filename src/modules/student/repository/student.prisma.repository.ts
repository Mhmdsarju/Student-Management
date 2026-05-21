import { prisma } from "../../../config/prisma";
import { IStudentRepository } from "./student.repository";
import { CreateStudentDto } from "../dto/create-student.dto";
import { UpdateStudentDto } from "../dto/update-student.dto";

export class StudentPrismaRepository
  implements IStudentRepository {

  async create(data: CreateStudentDto) {
    return prisma.student.create({
      data,
    });
  }

  async findById(id: string) {
    return prisma.student.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return prisma.student.findMany();
  }

  async update(
    id: string,
    data: UpdateStudentDto
  ) {
    return prisma.student.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.student.delete({
      where: { id },
    });
  }
}