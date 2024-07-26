import { Food } from "../models/food"
import { UseCase } from "../shared/use-case"
import { FoodsRepository } from "./foods-repository"

export class FetchFoods
  implements UseCase<void, Array<Omit<Food, "categoryId">>>
{
  constructor(private readonly repo: FoodsRepository) {}

  async execute(): Promise<Food[]> {
    const foods = await this.repo.getFoods()

    return foods
  }
}
