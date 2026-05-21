import { StudentPrismaRepository } from "../modules/student/repository/student.prisma.repository";
import { StudentService } from "../modules/student/service/student.service";
import { TeacherPrismaRepository } from "../modules/teacher/repository/teacher.prisma.repository";
import { TeacherService } from "../modules/teacher/service/teacher.service";
import { CoursePrismaRepository } from "../modules/course/repository/course.prisma.repository";
import { CourseService } from "../modules/course/service/course.service";
import { EnrollmentPrismaRepository } from "../modules/enrollment/repository/enrollment.prisma.repository";
import { EnrollmentService }from "../modules/enrollment/service/enrollment.service";
import { MarkPrismaRepository } from "../modules/mark/repository/mark.prisma.repository";
import { MarkService } from "../modules/mark/service/mark.service";

const studentRepository =  new StudentPrismaRepository();
const teacherRepository =  new TeacherPrismaRepository();
const courseRepository =  new CoursePrismaRepository();
const enrollmentRepository =  new EnrollmentPrismaRepository();
const markRepository =  new MarkPrismaRepository();

export const studentService =  new StudentService(studentRepository);

export const teacherService =  new TeacherService(teacherRepository);

export const courseService =  new CourseService(courseRepository);

export const enrollmentService =  new EnrollmentService(enrollmentRepository);

export const markService =  new MarkService(markRepository);