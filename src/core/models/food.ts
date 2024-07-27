import { Static, t } from "elysia"
import { Category } from "./category"
import { Nutrients } from "./nutrients"

export const Food = t.Object({
  id: t.Integer(),
  name: t.String(),
})
export type Food = Static<typeof Food>

export const FoodWithCategory = t.Intersect([
  Food,
  t.Object({ category: t.String() }),
])
export type FoodWithCategory = Static<typeof FoodWithCategory>

export const FoodWithDetails = t.Intersect([
  Food,
  t.Record(t.Literal("category"), Category),
  t.Record(t.Literal("nutrients"), Nutrients),
])
export type FoodWithDetails = Static<typeof FoodWithDetails>
