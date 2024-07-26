import { FoodWithDetails } from "../models/food"
import { UseCase } from "../shared/use-case"
import { FoodsRepository } from "./foods-repository"

export class FindFoodById implements UseCase<number, FoodWithDetails | null> {
  constructor(private readonly repo: FoodsRepository) {}

  async execute(id: number): Promise<FoodWithDetails | null> {
    const food = await this.repo.findFoodById(id)

    if (!food) {
      return null
    }

    return food
  }
}
