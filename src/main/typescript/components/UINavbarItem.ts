import { MDCRipple } from "@material/ripple";
import { AbstractComponent } from "../AbstractComponent";
import { log } from "../util/Logger";

export class UINavbarItem extends AbstractComponent {

    constructor() {
        super();
    }

    public onMounted(currentProps: object, currentState: object): void {
        super.onMounted(currentProps, currentState);
        const elem = document.querySelector(".mdc-icon-button");

        if (elem) {
            const buttonRipple = new MDCRipple(elem);
        }
    }

    public onClick(event: InputEvent): void {
        log.info("onClick");
    }

}
