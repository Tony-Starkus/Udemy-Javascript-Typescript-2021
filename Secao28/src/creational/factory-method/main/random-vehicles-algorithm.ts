import { BycicleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bycicleFactory = new BycicleFactory();

  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("Celta Preto");

  const bicycle = bycicleFactory.getVehicle("Bicycle");

  const cars = [car1, car2, bicycle];

  return cars[randomNumbers(cars.length)];
}
