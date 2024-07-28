import { Food } from "../models/food"
import { UseCase } from "../shared/use-case"
import { FoodsRepository } from "./foods-repository"

export class SearchFoodByName implements UseCase<string, Food[]> {
  constructor(private readonly repo: FoodsRepository) {}

  async execute(name: string): Promise<Food[]> {
    const foods = await this.repo.searchFoodByName(name)

    return foods
  }
}
