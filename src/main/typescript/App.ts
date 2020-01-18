import { log } from "./util/Logger";

export class App {
    private name: string;
    private message: string;

    constructor() {
        this.name = "Demo";
        this.message = "Hello world";

        log.info(`App started`);
    }
}

export default new App();
