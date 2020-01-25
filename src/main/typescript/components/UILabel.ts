import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { AbstractComponent } from "../AbstractComponent";
import { log } from "../util/Logger";

@Component
export class UILabel extends AbstractComponent {

    @Prop({ default: "" })
    text: string | undefined;

    constructor() {
        super();
    }

    onBeforeMount(): void {
        log.info("onBeforeMount");
    }

    onChange(event: InputEvent): void {
        const inputField = event.target as HTMLInputElement;
        this.text = inputField.value;
        log.info("onChange");
    }

}
