import { FoodWithCategory } from "../models/food"
import { UseCase } from "../shared/use-case"
import { FoodsRepository } from "./foods-repository"

export class FetchFoods implements UseCase<void, FoodWithCategory[]> {
  constructor(private readonly repo: FoodsRepository) {}

  async execute(): Promise<FoodWithCategory[]> {
    const foods = await this.repo.getFoods()

    return foods
  }
}
