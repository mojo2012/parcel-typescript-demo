import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { AbstractComponent } from "../AbstractComponent";

@Component
export class UINavBar extends AbstractComponent {

    @Prop({ default: "" })
    title: string | undefined;

    constructor() {
        super();
    }

}
