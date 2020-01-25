import { AbstractComponent } from "../AbstractComponent";
import { log } from "../util/Logger";

export class UINavbar extends AbstractComponent {

    constructor() {
        super();
        this.state.title = "";
    }

    onBeforeMount(): void {
        log.info("onBeforeMount");
    }

}
