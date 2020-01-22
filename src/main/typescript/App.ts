import Vue from "vue";
import { AbstractComponent } from "./AbstractComponent";
import { log } from "./util/Logger";

export class App extends AbstractComponent {

    private _title: string = "";

    constructor() {
        super();
        this.title = "Demo App";

        log.info(`App started`);
    }

    data(): any {
        return { title: "test" };
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
}

// export default Vue.extend(new App() as any);
