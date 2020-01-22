import Component from "vue-class-component";
import { AbstractComponent } from "./AbstractComponent";
import { log } from "./util/Logger";

@Component
export default class App extends AbstractComponent {

    title: string = "";

    constructor() {
        super();
        this.title = "Demo";

        log.info(`App started`);
    }

}

// export default Vue.extend(new App() as any);
