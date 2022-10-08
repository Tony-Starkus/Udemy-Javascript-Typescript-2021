import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from "./system-user-protocol";

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public username: string;

  constructor(firstName: string, username: string) {
    this.firstName = firstName;
    this.username = username;
  }

  getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((res) => {
      return setTimeout(() => {
        return res([
          { street: "Av. Brasil", number: 50 },
          { street: "Rua A", number: 40 },
        ]);
      }, 2000);
    });
  }
}
