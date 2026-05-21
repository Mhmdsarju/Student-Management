import { ITeacherRepository } from "../repository/teacher.repository";
import { CreateTeacherDto } from "../dto/create-teacher.dto";

export class TeacherService {

  constructor(
    private teacherRepository: ITeacherRepository
  ) {}

  async createTeacher(data: CreateTeacherDto) {
    return this.teacherRepository.create(data);
  }

  async getTeachers() {
    return this.teacherRepository.findAll();
  }
}