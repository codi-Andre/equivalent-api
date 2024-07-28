import { Static, t } from "elysia"

export const Nutrients = t.Intersect([
  t.Object({
    kcal: t.Number(),
    protein: t.Number(),
    lipids: t.Number(),
    carbohydrates: t.Number(),
  }),
  t.Record(t.String(), t.Number()),
])
export type Nutrients = Static<typeof Nutrients>

export const NutrientsWithQuantity = t.Intersect([
  Nutrients,
  t.Object({ quantity: t.Number() }),
])
export type NutrientsWithQuantity = Static<typeof NutrientsWithQuantity>
