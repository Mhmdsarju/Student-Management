import { ICourseRepository } from "../repository/course.repository";
import { CreateCourseDto } from "../dto/create-course.dto";

export class CourseService {

  constructor(
    private courseRepository: ICourseRepository
  ) {}

  async createCourse(data: CreateCourseDto) {
    return this.courseRepository.create(data);
  }

  async getCourses() {
    return this.courseRepository.findAll();
  }
}