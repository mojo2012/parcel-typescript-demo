import { AbstractComponent } from "./AbstractComponent";
import { Store } from './store/Store';
import { log } from "./util/Logger";

export class App extends AbstractComponent {

    constructor() {
        super();
        this.state.name = "Demo";
        this.state.message = "Hello world";

        log.info(`App started`);
    }

    public onMenu(event: any): void {
        log.info("Menu button clicked");

        Store.getInstance().update("navbar.visibility", false);

        // this.$(".nav-drawer").handler.openOrClose();
    }
}
