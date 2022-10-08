import { SystemUserProxy } from "./system-user/system-user-proxy";

const user = new SystemUserProxy("Thalisson", "Bandeira");

async function clientCode(): Promise<void> {
  user.getAddresses().then((response) => console.log(response));
}

clientCode();
