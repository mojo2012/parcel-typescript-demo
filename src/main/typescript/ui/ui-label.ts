import { bindable, customElement } from "aurelia-framework";

@customElement("ui-label")
export class UILabel {
    @bindable private text: string;

    constructor() {
        //
    }
}
