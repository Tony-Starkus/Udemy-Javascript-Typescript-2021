import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();

deliveryContext(factory, "Luiz", "20A", "Av Brasil", "SP");
deliveryContext(factory, "Helena", "502A", "Av Brasil", "SP");
deliveryContext(factory, "Joana", "502A", "Copacabana", "RJ");

console.log("\n\n", factory.getLocations());
