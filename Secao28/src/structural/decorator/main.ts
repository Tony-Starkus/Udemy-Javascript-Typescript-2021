import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
import { ProductDecorator } from "./product/product-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt();
const decoratedTShirtStamp = new ProductStampDecorator(tShirt);
const decoratedTShirtStampFrontAndBack = new ProductStampDecorator(
  decoratedTShirtStamp
);
const decoratedTShirtCustomized = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getName());
console.log(tShirt.getPrice());

console.log(decoratedTShirtStamp.getName());
console.log(decoratedTShirtStamp.getPrice());

console.log(decoratedTShirtStampFrontAndBack.getName());
console.log(decoratedTShirtStampFrontAndBack.getPrice());

console.log(decoratedTShirtCustomized.getName());
console.log(decoratedTShirtCustomized.getPrice());
