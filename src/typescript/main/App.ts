import { log } from "./util/Logger";

export class App {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public run(): void {
        log.info(`Hello ${this.name}`);
    }
}
