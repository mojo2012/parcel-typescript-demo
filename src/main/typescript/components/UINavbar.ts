import { AbstractComponent } from "../AbstractComponent";
import { log } from "../util/Logger";
import { MDCTopAppBar } from '@material/top-app-bar';

export class UINavbar extends AbstractComponent {

    constructor() {
        super();
        this.state.title = "";
    }

    onMounted?(currentProps: object, currentState: object): void {
        // const topAppBarElement = document.querySelector('.mdc-top-app-bar');
        const topAppBar = new MDCTopAppBar(this.root);
    }
}
