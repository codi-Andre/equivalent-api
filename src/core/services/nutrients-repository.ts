import { Nutrients } from "../models/nutrients"

export interface NutrientsRepository {
  calcFoodEquivalent(
    id1: number,
    id2: number
  ): Promise<Array<Nutrients | undefined>>
}
