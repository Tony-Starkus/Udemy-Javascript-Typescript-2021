// import { MyDatabaseClassic } from "./db/my-database-classic";
import { MyDatabaseModule } from "./db/my-database-module";

const myDatabaseClassic = MyDatabaseModule;

myDatabaseClassic.add({ name: "Luiz", age: 30 });
myDatabaseClassic.add({ name: "Maria", age: 50 });
myDatabaseClassic.add({ name: "Eduardo", age: 25 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

export { myDatabaseClassic };
