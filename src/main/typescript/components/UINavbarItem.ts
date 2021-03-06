import { MDCRipple } from "@material/ripple";
import { AbstractComponent } from "../AbstractComponent";
import { log } from "../util/Logger";

export class UINavbarItem extends AbstractComponent {

    constructor() {
        super();
    }

    onMounted?(currentProps: object, currentState: object): void {
        super.onMounted(currentProps, currentState);
        const buttonRipple = new MDCRipple(document.querySelector(".mdc-icon-button"));
    }

    onClick(event: InputEvent): void {
        log.info("onClick");
    }

}
