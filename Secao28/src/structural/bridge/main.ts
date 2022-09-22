import { Radio } from "./device/radio";
import { TV } from "./device/TV";
import { RemoteControl } from "./remote-control/remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volume";

function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume
): void {
  abstraction.togglePower();

  //Type Guard
  if (!("volumeUp" in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
}

const tv = new TV();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);

const tvRemoveControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoveControl);
