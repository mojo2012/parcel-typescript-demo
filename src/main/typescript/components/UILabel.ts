import { AbstractComponent } from "../AbstractComponent";
import { log } from "../util/Logger";

export class UILabel extends AbstractComponent {

    constructor() {
        super();
        this.state.text = "Hello you!";
    }

    onChange(event: InputEvent): void {
        const inputField = event.target as HTMLInputElement;
        this.state.text = inputField.value;
        this.update();
        log.info("onChange");
    }

}
