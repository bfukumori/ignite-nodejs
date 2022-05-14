import { ICreateCategoryDTO } from "@modules/dtos/ICreateCategoryDTO";

import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<Category>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
