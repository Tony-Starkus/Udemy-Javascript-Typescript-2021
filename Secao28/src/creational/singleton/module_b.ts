// import { MyDatabaseClassic } from "./db/my-database-classic";
import { MyDatabaseModule } from "./db/my-database-module";
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from "./module_a";

const myDatabaseClassic = MyDatabaseModule;

myDatabaseClassic.add({ name: "Roberto", age: 30 });
myDatabaseClassic.add({ name: "Joana", age: 50 });
myDatabaseClassic.add({ name: "Luiza", age: 25 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
