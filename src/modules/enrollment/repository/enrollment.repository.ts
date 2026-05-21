import { Enrollment } from "@prisma/client";
import { CreateEnrollmentDto } from "../dto/create-enrollment.dto";

export interface IEnrollmentRepository {
  create(data: CreateEnrollmentDto): Promise<Enrollment>;

  findAll(): Promise<Enrollment[]>;
}