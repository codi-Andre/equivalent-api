import { SearchFoodByCategoryId } from "@/core/services/search-food-by-category-id"
import { repository } from "@/repositories/sqlite-repository"
import Elysia, { t } from "elysia"

export const searchFood = new Elysia().get(
  "/foods/search",
  async ({ query }) => {
    const { category } = query
    const foodsRepository = new SearchFoodByCategoryId(repository)
    const foods = await foodsRepository.execute(category)

    return foods
  },
  {
    query: t.Object({
      category: t.Number({
        error: "category must be a number",
      }),
    }),
    response: t.Array(
      t.Object({
        id: t.Number(),
        name: t.String(),
      })
    ),
    detail: {
      tags: ["Foods"],
    },
  }
)
