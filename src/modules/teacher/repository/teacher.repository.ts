import { Teacher } from "@prisma/client";
import { CreateTeacherDto } from "../dto/create-teacher.dto";

export interface ITeacherRepository {
  create(data: CreateTeacherDto): Promise<Teacher>;

  findAll(): Promise<Teacher[]>;
}