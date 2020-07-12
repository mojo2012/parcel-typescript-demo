import { MDCDrawer } from "@material/drawer";
import { MDCList } from "@material/list";
import { AbstractComponent } from "../AbstractComponent";

export class UIDrawer extends AbstractComponent {

    protected internalHandler?: MDCDrawer | MDCList;

    constructor() {
        super();
    }

    public onMounted(currentProps: object, currentState: object): void {
        super.onMounted(currentProps, currentState);

        // tslint:disable-next-line: no-string-literal
        if (Reflect.get(currentProps, "dismissable")) {
            const elem = document.querySelector(".mdc-drawer");
            if (elem) {
                this.internalHandler = MDCDrawer.attachTo(elem);
            }
        } else {
            const elem = document.querySelector(".mdc-list");
            if (elem) {
                this.internalHandler = MDCList.attachTo(elem);
                this.internalHandler.wrapFocus = true;
            }
        }
    }

    public openOrClose(): void {
        if (this.props.dismissable) {
            if ((this.internalHandler as MDCDrawer).getDefaultFoundation().isOpen()) {
                this.close();
            } else {
                this.open();
            }
        }
    }

    public open(): void {
        if (this.props.dismissable) {
            (this.internalHandler as MDCDrawer).getDefaultFoundation().open();
        }
    }

    public close(): void {
        if (this.props.dismissable) {
            (this.internalHandler as MDCDrawer).getDefaultFoundation().close();
        }
    }

}
