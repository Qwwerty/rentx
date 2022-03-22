import { Specification } from "../../model/Specification";

interface ICreataeSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepostiory {
  create({ name, description }: ICreataeSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepostiory, ICreataeSpecificationDTO };
