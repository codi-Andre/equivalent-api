import { Static, t } from "elysia"

export const Category = t.Object({
  id: t.Integer(),
  name: t.String(),
})

export type Category = Static<typeof Category>
