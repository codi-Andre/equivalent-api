import { Food } from "@/core/models/food"
import { FetchCategories } from "@/core/services/fetch-categories"
import { repository } from "@/repositories/sqlite-repository"
import Elysia, { t } from "elysia"

export const getCategories = new Elysia().get(
  "/categories",
  async () => {
    const categoriesRepository = new FetchCategories(repository)
    const categories = await categoriesRepository.execute()

    return categories
  },
  {
    response: t.Array(Food),
    detail: {
      tags: ["Categories"],
    },
  }
)
