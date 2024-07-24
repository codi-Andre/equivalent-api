import { relations } from "drizzle-orm/relations";
import { categories, foods, amino_acids, fatty_acids, nutrients } from "./schema";

export const foodsRelations = relations(foods, ({one, many}) => ({
	category: one(categories, {
		fields: [foods.categoryId],
		references: [categories.id]
	}),
	amino_acids: many(amino_acids),
	fatty_acids: many(fatty_acids),
	nutrients: many(nutrients),
}));

export const categoriesRelations = relations(categories, ({many}) => ({
	foods: many(foods),
}));

export const amino_acidsRelations = relations(amino_acids, ({one}) => ({
	food: one(foods, {
		fields: [amino_acids.foodId],
		references: [foods.id]
	}),
}));

export const fatty_acidsRelations = relations(fatty_acids, ({one}) => ({
	food: one(foods, {
		fields: [fatty_acids.foodId],
		references: [foods.id]
	}),
}));

export const nutrientsRelations = relations(nutrients, ({one}) => ({
	food: one(foods, {
		fields: [nutrients.foodId],
		references: [foods.id]
	}),
}));