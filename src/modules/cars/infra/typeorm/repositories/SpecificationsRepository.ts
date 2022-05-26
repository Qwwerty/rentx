import { getRepository, Repository } from "typeorm";

import {
  ICreataeSpecificationDTO,
  ISpecificationsRepostiory,
} from "@modules/cars/repositories/ISpecificationsRepository";

import { Specification } from "../../../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepostiory {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreataeSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }
}

export { SpecificationsRepository };
