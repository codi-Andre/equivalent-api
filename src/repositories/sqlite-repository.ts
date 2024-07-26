import { Category } from "@/core/models/category"
import { Food, FoodWithCategory, FoodWithDetails } from "@/core/models/food"
import { CategoriesRepository } from "@/core/services/categories-repository"
import { FoodsRepository } from "@/core/services/foods-repository"
import { eq } from "drizzle-orm"
import { db, type SqliteDb } from "drizzle/db"
import { categories, foods } from "drizzle/schema"

class Repository implements CategoriesRepository, FoodsRepository {
  constructor(private readonly repo: SqliteDb) {}

  async searchFoodByCategoryId(id: number): Promise<Food[]> {
    const foodList = await this.repo
      .select({ id: foods.id, name: foods.name })
      .from(foods)
      .where(eq(foods.categoryId, id))

    return foodList
  }

  async getFoods(): Promise<FoodWithCategory[]> {
    const foodList = await this.repo
      .select({ id: foods.id, name: foods.name, category: categories.name })
      .from(foods)
      .innerJoin(categories, eq(categories.id, foods.categoryId))

    return foodList
  }

  async findFoodById(id: number): Promise<FoodWithDetails | undefined> {
    const food = await this.repo.query.foods.findFirst({
      columns: {
        categoryId: false,
      },
      with: {
        category: true,
        nutrients: {
          columns: {
            kcal: true,
            protein: true,
            lipids: true,
            carbohydrates: true,
          },
        },
      },
      where(foods, { eq }) {
        return eq(foods.id, id)
      },
    })
    return food
  }

  async fetchCategories(): Promise<Category[]> {
    const categoryList = await this.repo.select().from(categories)

    return categoryList
  }
}

export const repository = new Repository(db)
