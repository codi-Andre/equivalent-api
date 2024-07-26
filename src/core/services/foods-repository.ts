import { type Food } from "../models/food"

export interface FoodsRepository {
  getFoods(): Promise<Food[]>
  findFoodById(id: number): Promise<Food | undefined>
}
