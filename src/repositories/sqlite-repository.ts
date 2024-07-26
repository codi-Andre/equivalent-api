import { Category } from "@/core/models/category"
import { CategoriesRepository } from "@/core/services/categories-repository"
import { db, type SqliteDb } from "drizzle/db"
import { categories } from "drizzle/schema"

class Repository implements CategoriesRepository {
  constructor(private readonly repo: SqliteDb) {}

  async fetchCategories(): Promise<Category[]> {
    const categoryList = await this.repo.select().from(categories)

    return categoryList
  }
}

export const repository = new Repository(db)
