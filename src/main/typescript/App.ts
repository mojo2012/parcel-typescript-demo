import { AbstractComponent } from "./AbstractComponent";
import { log } from "./util/Logger";

export class App extends AbstractComponent {

    constructor() {
        super();
        this.state.name = "Demo";
        this.state.message = "Hello world";

        log.info(`App started`);
    }

    onMenu(event: any): void {
        log.info("Menu button clicked");
        this.$(".nav-drawer").handler.open();
    }
}
