import { MDCDrawer } from "@material/drawer";
import { AbstractComponent } from "../AbstractComponent";

export class UIDrawer extends AbstractComponent {

    internalHandler: MDCDrawer;

    constructor() {
        super();
    }

    onMounted?(currentProps: object, currentState: object): void {
        super.onMounted(currentProps, currentState);
        this.internalHandler = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
    }

    openOrClose(): void {
        if (this.internalHandler.getDefaultFoundation().isOpen()) {
            this.close();
        } else {
            this.open();
        }
    }

    open(): void {
        this.internalHandler.getDefaultFoundation().open();
    }

    close(): void {
        this.internalHandler.getDefaultFoundation().close();
    }

}
