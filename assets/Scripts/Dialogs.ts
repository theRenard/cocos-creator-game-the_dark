import { _decorator, Component, Node, Label } from "cc";
const { ccclass, property } = _decorator;
import intro from "../Dialogs/intro.json";

@ccclass("Dialogs")
export class Dialogs extends Component {
  intro = intro;
  label: Label = null;
  dialogIterator = null;

  cancellableTimeout = null;
  start() {
    this.label = this.node.getComponent(Label);
    this.dialogIterator = this.dialogs();
    this.startDialogs();
  }

  dialogs = function* () {
    for (const { text, time } of intro) {
      yield { text, time };
    }
  };

  startDialogs() {
    const { value, done } = this.dialogIterator.next();
    if (done) {
      this.label.string = "";
      return;
    }
    if (value) {
      this.label.string = value.text;
      this.cancellableTimeout = setTimeout(() => {
        this.startDialogs();
      }, value.time);
    }
  }
}
