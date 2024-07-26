import { Food, FoodWithCategory, FoodWithDetails } from "../models/food"

export interface FoodsRepository {
  getFoods(): Promise<FoodWithCategory[]>
  findFoodById(id: number): Promise<FoodWithDetails | undefined>
  searchFoodByCategoryId(id: number): Promise<Food[]>
}
