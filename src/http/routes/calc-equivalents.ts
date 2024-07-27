import { CalculateFoodEquivalent } from "@/core/services/calc-food-equivalent"
import { repository } from "@/repositories/sqlite-repository"
import Elysia, { NotFoundError, t } from "elysia"

export const calcEquivalents = new Elysia().post(
  "/equivalents",
  async ({ body }) => {
    const { quantity, id1, id2 } = body
    const foodRepository = new CalculateFoodEquivalent(repository)
    const equivalents = await foodRepository.execute({ quantity, id1, id2 })

    if (!equivalents) {
      throw new NotFoundError()
    }
    return equivalents
  },
  {
    body: t.Object({
      quantity: t.Integer({
        minimum: 1,
        maximum: 1000,
        error:
          "quantity must be in grams(g) and be a integer between 1 and 1000",
      }),
      id1: t.Integer({
        error: "ids must be a integer",
        minimum: 1,
      }),
      id2: t.Integer({
        error: "ids must be a integer",
        minimum: 1,
      }),
    }),
    response: t.Array(
      t.Object({
        quantity: t.Nullable(t.Number()),
        kcal: t.Nullable(t.Number()),
        protein: t.Nullable(t.Number()),
        lipids: t.Nullable(t.Number()),
        carbohydrates: t.Nullable(t.Number()),
      })
    ),
    detail: {
      tags: ["equivalents"],
    },
  }
)
