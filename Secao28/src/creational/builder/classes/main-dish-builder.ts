import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Rice, Beans, Meat, Beverage, Dessert } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();

    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const beans = new Beans("Feijão", 10);
    const meat = new Meat("Carne", 20);

    this._mealBox.add(rice, beans, meat);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage("Bebida", 7);
    this._mealBox.add(beverage);

    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert("Sobremesa", 10);
    this._mealBox.add(dessert);

    return this;
  }

  getMeal(): MealBox {
    return this._mealBox;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }
}
