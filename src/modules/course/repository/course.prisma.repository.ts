import { prisma } from "../../../config/prisma";
import { CreateCourseDto } from "../dto/create-course.dto";
import { ICourseRepository } from "./course.repository";

export class CoursePrismaRepository
  implements ICourseRepository {

  async create(data: CreateCourseDto) {
    return prisma.course.create({
      data,
    });
  }

  async findAll() {
    return prisma.course.findMany({
      include: {
        teacher: true,
      },
    });
  }
}