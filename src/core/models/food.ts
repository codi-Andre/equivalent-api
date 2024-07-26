import { Category } from "./category"
import { Nutrients } from "./nutrients"

export type Food = {
  id: number
  name: string
}

export type FoodWithCategory = Food & {
  category: string
}

export type FoodWithDetails = Food &
  Record<"category", Category> &
  Record<"nutrients", Nutrients>
