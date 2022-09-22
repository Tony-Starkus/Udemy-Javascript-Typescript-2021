import { Vehicle } from "../vehicle/vehicle";

// Creator class
export abstract class VehicleFactory {
  // Factory method
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(customerName);

    return car;
  }
}
