import { type FoodWithCategory, type FoodWithDetails } from "../models/food"

export interface FoodsRepository {
  getFoods(): Promise<FoodWithCategory[]>
  findFoodById(id: number): Promise<FoodWithDetails | undefined>
}
