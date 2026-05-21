import { prisma } from "../../../config/prisma";
import { CreateTeacherDto } from "../dto/create-teacher.dto";
import { ITeacherRepository } from "./teacher.repository";

export class TeacherPrismaRepository implements ITeacherRepository{
    async create(data:CreateTeacherDto){
        return prisma.teacher.create({data});
    }
    async findAll(){
        return prisma.teacher.findMany({
            include:{
                courses:true
            }
        })
    }
}