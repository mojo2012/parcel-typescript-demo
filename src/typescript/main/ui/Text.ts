import { customElement } from "aurelia";
import template from "./Test.html";

@customElement({ name: "Test", template })
export class Text {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }
}
