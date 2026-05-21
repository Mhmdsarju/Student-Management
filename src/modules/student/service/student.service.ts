import { IStudentRepository } from "../repository/student.repository";
import { CreateStudentDto } from "../dto/create-student.dto";

export class StudentService {

    constructor(
        private studentRepository: IStudentRepository
    ) { }

    async createStudent(data: CreateStudentDto) {

        const existingStudent = await this.studentRepository.findAll();

        const emailExists = existingStudent.find(student => student.email === data.email);

        if (emailExists) {
            throw new Error("Email already exists");
        }

        return this.studentRepository.create(data);
    }

    async getStudents() {
        return this.studentRepository.findAll();
    }
}