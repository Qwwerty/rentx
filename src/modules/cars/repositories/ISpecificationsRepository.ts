import { Specification } from "../entities/Specification";

interface ICreataeSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepostiory {
  create({ name, description }: ICreataeSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepostiory, ICreataeSpecificationDTO };
