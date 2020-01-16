import { customElement } from "aurelia";
import template from "./App.html";

import { log } from "./util/Logger";

@customElement({ name: "App", template })
export class App {
    private name: string;
    private message: string;

    constructor() {
        this.name = "Demo";
        this.message = "Hello world";

        log.info(`App started`);
    }
}
