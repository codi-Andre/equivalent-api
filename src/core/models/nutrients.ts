export type Nutrients = {
  [key: string]: number | null
  kcal: number | null
  protein: number | null
  lipids: number | null
  carbohydrates: number | null
}

export type NutrientsWithQuantity = NonNullable<Nutrients> & {
  quantity: number
}
