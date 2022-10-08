import { MyDataStructure } from "./my-data-structure";
import { MyReverteIterator } from "./my-reverse-iterator";

const dataStructure = new MyDataStructure();
dataStructure.addItem("A", "B", "C", "D", "E", "F");

const [a, b] = dataStructure; // Só é possível por causa do [Symbol.iterator]
console.log(a, b);

for (const data of dataStructure) {
  console.log(data);
}

for (const data of dataStructure) {
  console.log(data);
}

dataStructure.changeIterator(new MyReverteIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
