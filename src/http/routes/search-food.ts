/* eslint-disable no-useless-escape */
import { Food } from "@/core/models/food"
import { SearchFoodByCategoryId } from "@/core/services/search-food-by-category-id"
import { SearchFoodByName } from "@/core/services/search-food-by-name"
import { repository } from "@/repositories/sqlite-repository"
import Elysia, { t } from "elysia"

export const searchFood = new Elysia().get(
  "/foods/search",
  async ({ query }) => {
    const { category, name } = query
    let foodsRepository: SearchFoodByCategoryId | SearchFoodByName
    let foods: Food[] = []

    if (category) {
      foodsRepository = new SearchFoodByCategoryId(repository)
      foods = await foodsRepository.execute(category)
    }
    if (name) {
      foodsRepository = new SearchFoodByName(repository)
      foods = await foodsRepository.execute(name)
    }

    return foods
  },
  {
    query: t.Object({
      category: t.Optional(
        t.Integer({
          error: "category must be a Integer",
        })
      ),
      name: t.Optional(
        t.String({
          maxLength: 50,
          minLength: 1,
          error:
            "name must be a string with a length greater than 1 and less than 50",
        })
      ),
    }),
    response: t.Array(Food),
    detail: {
      tags: ["Foods"],
    },
  }
)
