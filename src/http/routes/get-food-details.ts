import { FoodWithDetails } from "@/core/models/food"
import { FindFoodById } from "@/core/services/find-food-by-id"
import { repository } from "@/repositories/sqlite-repository"
import Elysia, { NotFoundError, t } from "elysia"

export const getFoodDetails = new Elysia().get(
  "/foods/:id",
  async ({ params }) => {
    const { id } = params
    const foodsRepository = new FindFoodById(repository)
    const food = await foodsRepository.execute(id)

    if (!food) {
      throw new NotFoundError()
    }
    return food
  },
  {
    params: t.Object({
      id: t.Number({
        error: "Id must be a number",
      }),
    }),
    response: FoodWithDetails,
    detail: {
      tags: ["Foods"],
    },
  }
)
