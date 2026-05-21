import { Mark } from "@prisma/client";
import { CreateMarkDto } from "../dto/create-mark.dto";

export interface IMarkRepository {
  create(data: CreateMarkDto): Promise<Mark>;

  findAll(): Promise<Mark[]>;
}
