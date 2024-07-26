import { Category } from "./category"
import { Nutrients } from "./nutrients"

export type Food = {
  id: number
  name: string
  category?: Partial<Category> | string
  nutrients?: Partial<Nutrients>
}
