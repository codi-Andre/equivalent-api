import { Category } from "../models/category"
import { Food } from "../models/food"
import { UseCase } from "../shared/use-case"
import { FoodsRepository } from "./foods-repository"

export class FindFoodById
  implements
    UseCase<number, (Omit<Food, "categoryId"> & Pick<Category, "name">) | null>
{
  constructor(private readonly repo: FoodsRepository) {}

  async execute(id: number): Promise<Food | null> {
    const food = await this.repo.findFoodById(id)

    if (!food) {
      return null
    }

    return food
  }
}
