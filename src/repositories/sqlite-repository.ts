import { Category } from "@/core/models/category"
import { Food, FoodWithCategory, FoodWithDetails } from "@/core/models/food"
import { Nutrients } from "@/core/models/nutrients"
import { CategoriesRepository } from "@/core/services/categories-repository"
import { FoodsRepository } from "@/core/services/foods-repository"
import { NutrientsRepository } from "@/core/services/nutrients-repository"
import { eq } from "drizzle-orm"
import { db, type SqliteDb } from "drizzle/db"
import { categories, foods, nutrients } from "drizzle/schema"

class Repository
  implements CategoriesRepository, FoodsRepository, NutrientsRepository
{
  constructor(private readonly repo: SqliteDb) {}

  async calcFoodEquivalent(
    id1: number,
    id2: number
  ): Promise<Array<Nutrients | undefined>> {
    const food1 = await this.repo.query.nutrients.findFirst({
      columns: {
        kcal: true,
        protein: true,
        lipids: true,
        carbohydrates: true,
      },
      where: eq(nutrients.foodId, id1),
    })

    const food2 = await this.repo.query.nutrients.findFirst({
      columns: {
        kcal: true,
        protein: true,
        lipids: true,
        carbohydrates: true,
      },
      where: eq(nutrients.foodId, id2),
    })

    return [food1, food2]
  }

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
