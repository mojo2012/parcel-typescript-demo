import { AbstractComponent } from "./AbstractComponent";
import { log } from "./util/Logger";

export class App extends AbstractComponent {

    title: string = "";

    constructor() {
        super();
        this.title = "Demo";

        log.info(`App started`);
    }

}
