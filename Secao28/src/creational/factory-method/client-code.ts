// import { Car } from "./vehicle/car";

import { CarFactory } from "./factories/car-factory";
import { randomCarAlgorithm } from "./main/random-vehicles-algorithm";
import { randomNumbers } from "./utils/random-numbers";

// const fusca = new Car("Fusca");
// fusca.pickUp("Joana");
// fusca.stop();

// const celta = new Car("Celta");
// celta.pickUp("João");
// celta.stop();

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle("Fusca");
fusca.pickUp("Joana");
fusca.stop();

const customersNames = ["Ana", "Joana", "Helena", "João"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customersNames[randomNumbers(customersNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log("---");

  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
}
