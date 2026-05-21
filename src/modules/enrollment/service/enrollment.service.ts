import { IEnrollmentRepository } from "../repository/enrollment.repository";
import { CreateEnrollmentDto } from "../dto/create-enrollment.dto";

export class EnrollmentService {

  constructor(
    private enrollmentRepository: IEnrollmentRepository
  ) {}

  async enrollStudent(data: CreateEnrollmentDto) {
    return this.enrollmentRepository.create(data);
  }

  async getEnrollments() {
    return this.enrollmentRepository.findAll();
  }
}