import { UseCase } from "@/core/shared/use-case"
import { CategoriesRepository } from "./categories-repository"
import { Category } from "../models/category"

export class FetchCategories implements UseCase<void, Category[]> {
  constructor(private readonly repo: CategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.repo.fetchCategories()

    return categories
  }
}
