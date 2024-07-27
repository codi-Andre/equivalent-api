import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
})

export const foods = sqliteTable("foods", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  categoryId: integer("category_id")
    .references(() => categories.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    })
    .notNull(),
  name: text("name").notNull().unique(),
})

export const nutrients = sqliteTable("nutrients", {
  foodId: integer("food_id")
    .references(() => foods.id, {
      onDelete: "restrict",
      onUpdate: "cascade",
    })
    .unique(),
  moisture: real("moisture").notNull(),
  kcal: real("kcal").notNull(),
  kJ: real("kJ").notNull(),
  protein: real("protein").notNull(),
  lipids: real("lipids").notNull(),
  cholesterol: real("cholesterol").notNull(),
  carbohydrates: real("carbohydrates").notNull(),
  dietaryFiber: real("dietaryFiber").notNull(),
  ash: real("ash").notNull(),
  calcium: real("calcium").notNull(),
  magnesium: real("magnesium").notNull(),
  manganese: real("manganese").notNull(),
  phosphorus: real("phosphorus").notNull(),
  iron: real("iron").notNull(),
  sodium: real("sodium").notNull(),
  potassium: real("potassium").notNull(),
  copper: real("copper").notNull(),
  zinc: real("zinc").notNull(),
  retinol: real("retinol").notNull(),
  re: real("re").notNull(),
  rae: real("rae").notNull(),
  thiamin: real("thiamin").notNull(),
  riboflavin: real("riboflavin").notNull(),
  pyridoxine: real("pyridoxine").notNull(),
  niacin: real("niacin").notNull(),
  vitaminC: real("vitaminC").notNull(),
})
