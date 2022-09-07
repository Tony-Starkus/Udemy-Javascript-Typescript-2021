// Design Patter SINGLETON - GoF | FACTORY METHOD
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
const db2 = Database.getDatabase('localhost', 'root', '123456');

db1.connect();
db2.connect();

console.log(db1 === db2);

// const database1 = new Database('localhost', 'root', '123456');
// database1.connect();

// const database2 = new Database('localhost', 'root', '123456');
// database2.connect();
