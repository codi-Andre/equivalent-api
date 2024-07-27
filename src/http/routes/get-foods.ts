import { FoodWithCategory } from "@/core/models/food"
import { FetchFoods } from "@/core/services/fetch-foods"
import { repository } from "@/repositories/sqlite-repository"
import Elysia, { t } from "elysia"

export const getFoods = new Elysia().get(
  "/foods",
  async () => {
    const foodsRepository = new FetchFoods(repository)
    const foods = await foodsRepository.execute()

    return foods
  },
  {
    response: t.Array(FoodWithCategory),
    detail: {
      tags: ["Foods"],
    },
  }
)
