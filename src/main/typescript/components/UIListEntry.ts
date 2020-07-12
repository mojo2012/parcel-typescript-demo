import { AbstractComponent } from "../AbstractComponent";
import { log } from "../util/Logger";

export class UIListEntry extends AbstractComponent {

    private selected: boolean;

    constructor() {
        super();
    }

    public onBeforeMount(currentProps: object, currentState: object): void {
        super.onBeforeMount(currentProps, currentState);

        this.state.selected = this.props.selected;
    }

}
