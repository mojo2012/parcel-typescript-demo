import { MDCDrawer } from "@material/drawer";
import { MDCList } from "@material/list";
import { AbstractComponent } from "../AbstractComponent";

export class UIDrawer extends AbstractComponent {

    internalHandler: MDCDrawer | MDCList;

    constructor() {
        super();
    }

    onMounted?(currentProps: object, currentState: object): void {
        super.onMounted(currentProps, currentState);

        // tslint:disable-next-line: no-string-literal
        if (currentProps["dismissable"]) {
            this.internalHandler = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
        } else {
            this.internalHandler = MDCList.attachTo(document.querySelector(".mdc-list"));
            this.internalHandler.wrapFocus = true;
        }
    }

    openOrClose(): void {
        if (this.props.dismissable) {
            if ((this.internalHandler as MDCDrawer).getDefaultFoundation().isOpen()) {
                this.close();
            } else {
                this.open();
            }
        }
    }

    open(): void {
        if (this.props.dismissable) {
            (this.internalHandler as MDCDrawer).getDefaultFoundation().open();
        }
    }

    close(): void {
        if (this.props.dismissable) {
            (this.internalHandler as MDCDrawer).getDefaultFoundation().close();
        }
    }

}
