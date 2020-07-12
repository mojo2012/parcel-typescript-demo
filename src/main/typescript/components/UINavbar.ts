import { MDCTopAppBar } from "@material/top-app-bar";
import { AbstractComponent } from "../AbstractComponent";

export class UINavbar extends AbstractComponent {

    constructor() {
        super();
        this.state.title = "";
    }

    public onMounted(currentProps: object, currentState: object): void {
        super.onMounted(currentProps, currentState);

        if (this.root) {
            const topAppBar = new MDCTopAppBar(this.root);
        }
    }
}
