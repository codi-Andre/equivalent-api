export type Nutrients = {
  [key: string]: number
  kcal: number
  protein: number
  lipids: number
  carbohydrates: number
}

export type NutrientsWithQuantity = Nutrients & {
  quantity: number
}
