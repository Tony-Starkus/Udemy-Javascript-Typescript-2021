import { AdminUser } from "./admin-user";
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from "./system-user-protocol";

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAdresses: SystemUserAddressProtocol[] | null = null;

  constructor(public firstName: string, public username: string) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.username);
    }
    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createUser();

    if (this.realUserAdresses === null) {
      this.realUserAdresses = await this.realUser.getAddresses();
    }

    return this.realUserAdresses;
  }
}
