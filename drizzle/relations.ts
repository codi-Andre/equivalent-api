import { relations } from "drizzle-orm"
import { categories, foods, nutrients } from "./schema"

export const categoriesRelations = relations(categories, ({ many }) => ({
  foods: many(foods),
}))

export const foodsRelations = relations(foods, ({ one }) => ({
  category: one(categories, {
    fields: [foods.categoryId],
    references: [categories.id],
  }),
  nutrients: one(nutrients, {
    fields: [foods.id],
    references: [nutrients.foodId],
  }),
}))

export const nutrientsRelations = relations(nutrients, ({ one }) => ({
  foods: one(foods, {
    fields: [nutrients.foodId],
    references: [foods.id],
  }),
}))
