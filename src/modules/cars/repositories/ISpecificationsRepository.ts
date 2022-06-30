import { Specification } from "../entities/Specification";

interface ICreataeSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepostiory {
  create({
    name,
    description,
  }: ICreataeSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}

export { ISpecificationsRepostiory, ICreataeSpecificationDTO };
