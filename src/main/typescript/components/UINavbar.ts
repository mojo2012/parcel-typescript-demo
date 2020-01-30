import { AbstractComponent } from "../AbstractComponent";
import { log } from "../util/Logger";
import { MDCTopAppBar } from '@material/top-app-bar';

export class UINavbar extends AbstractComponent {

    constructor() {
        super();
        this.state.title = "";
    }

    onMounted?(currentProps: object, currentState: object): void {
        super.onMounted(currentProps, currentState);
        const topAppBar = new MDCTopAppBar(this.root);
    }
}
