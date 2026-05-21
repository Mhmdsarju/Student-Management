import { Student } from "@prisma/client";
import { CreateStudentDto } from "../dto/create-student.dto";
import { UpdateStudentDto } from "../dto/update-student.dto";

export interface IStudentRepository {
    create(data: CreateStudentDto): Promise<Student>;

    findById(id: string): Promise<Student | null>;

    findAll(): Promise<Student[]>;

    update(
        id: string,
        data: UpdateStudentDto
    ): Promise<Student>;

    delete(id: string): Promise<Student>;
}