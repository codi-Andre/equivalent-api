import { Food } from "../models/food"
import { UseCase } from "../shared/use-case"
import { FoodsRepository } from "./foods-repository"

export class SearchFoodByCategoryId implements UseCase<number, Food[]> {
  constructor(private readonly repo: FoodsRepository) {}

  async execute(id: number): Promise<Food[]> {
    const foods = await this.repo.searchFoodByCategoryId(id)

    return foods
  }
}
