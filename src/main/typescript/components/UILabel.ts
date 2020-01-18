import { AbstractComponent } from "../AbstractComponent";
import { log } from "../util/Logger";

export class UILabel extends AbstractComponent {

    constructor() {
        super();
        this.state.text = "Hello you!";
    }

    onBeforeMount(): void {
        log.info("onBeforeMount");
    }

    onChange(event: InputEvent): void {
        const inputField = event.target as HTMLInputElement;
        this.state.text = inputField.value;
        this.update();
        log.info("onChange");
    }

    handle(handler: (event: DocumentEvent) => void): any {
        const eventHandler = handler.bind(this);

        return (event: DocumentEvent) => {
            eventHandler(event);
        };
    }
}
