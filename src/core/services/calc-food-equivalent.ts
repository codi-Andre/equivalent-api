import { Nutrients, NutrientsWithQuantity } from "../models/nutrients"
import { UseCase } from "../shared/use-case"
import { NutrientsRepository } from "./nutrients-repository"

export class CalculateFoodEquivalent
  implements
    UseCase<
      { quantity: number; id1: number; id2: number },
      NutrientsWithQuantity[] | null
    >
{
  readonly #defaultQuantity = 100
  #food2Quantity = 100

  constructor(private readonly repo: NutrientsRepository) {}

  async execute(foodData: {
    quantity: number
    id1: number
    id2: number
  }): Promise<NutrientsWithQuantity[] | null> {
    const [food1, food2] = await this.repo.calcFoodEquivalent(
      foodData.id1,
      foodData.id2
    )
    if (!(food1 && food2)) {
      return null
    }

    const nutrients = this.#calc(foodData.quantity, food1, food2)

    return nutrients
  }

  #calc(
    quantity: number,
    food1: Nutrients,
    food2: Nutrients
  ): NutrientsWithQuantity[] {
    for (const nutrient in food1) {
      if (food1[nutrient] === null) {
        food1[nutrient] = 0
      }
      const perGram = food1[nutrient] / this.#defaultQuantity
      food1[nutrient] = parseFloat((perGram * quantity).toFixed(1))
    }

    for (const nutrient in food2) {
      if (food2[nutrient] === null) {
        food2[nutrient] = 0
      }
      food2[nutrient] = food2[nutrient] / this.#defaultQuantity
    }

    this.#food2Quantity = parseFloat((food1.kcal! / food2.kcal!).toFixed(1))
    console.log(this.#food2Quantity)
    for (const nutrient in food2) {
      food2[nutrient] = parseFloat(
        (food2[nutrient]! * this.#food2Quantity).toFixed(1)
      )
    }
    return [
      { ...food1, quantity },
      { ...food2, quantity: this.#food2Quantity },
    ]
  }
}
