import { type Category } from "../models/category"

export interface CategoriesRepository {
  fetchCategories(): Promise<Category[]>
}
