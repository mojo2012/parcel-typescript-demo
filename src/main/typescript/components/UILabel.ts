import Component from "vue-class-component";
import { AbstractComponent } from "../AbstractComponent";
import { log } from "../util/Logger";

@Component
export class UILabel extends AbstractComponent {

    text: string = "";

    constructor() {
        super();
    }

    onBeforeMount(): void {
        log.info("onBeforeMount");
    }

    onChange(event: InputEvent): void {
        const inputField = event.target as HTMLInputElement;
        this.text = inputField.value;
        log.info("onChange");
    }

}
