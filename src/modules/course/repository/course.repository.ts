import { Course } from "@prisma/client";
import { CreateCourseDto } from "../dto/create-course.dto";

export interface ICourseRepository {
  create(data: CreateCourseDto): Promise<Course>;

  findAll(): Promise<Course[]>;
}