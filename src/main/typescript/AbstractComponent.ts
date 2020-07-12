import { RiotComponent } from "riot";
import { v4 as uuid } from "uuid";
import { log } from "./util/Logger";

export abstract class AbstractComponent { // implements RiotComponent {
    [key: string]: any;

    protected uuid: string;
    protected className?: string;
    protected props: any = {};
    protected state?: any = {};
    protected root: Element | undefined;
    protected name?: string;
    protected slots: Array<import("@riotjs/dom-bindings").SlotBindingData> | undefined;
    protected components?: { [key: string]: import("riot").RiotComponentShell<object, object>; };

    constructor(id?: string) {
        if (id) {
            this.uuid = id;
        } else {
            this.uuid = uuid();
        }
    }

    public handle(handler: (event: DocumentEvent) => void): any {
        const eventHandler = handler.bind(this);

        return (event: DocumentEvent) => {
            eventHandler(event);
        };
    }

    public onBeforeMount(currentProps: object, currentState: object): void {
        log.info(this.name + ": onBeforeMount");
    }

    // mount(element: HTMLElement, initialState?: object, parentScope?: object): RiotComponent<object, object> {
    //     return this;
    // }

    // update(newState?: object, parentScope?: object): RiotComponent<object, object> {
    //     return null;
    // }

    // unmount(keepRootElement: boolean): RiotComponent<object, object> {
    //     return null;
    // }

    // shouldUpdate?(newProps: object, currentProps: object): boolean {
    //     return false;
    // }

    public onMounted(currentProps: object, currentState: object): void {
        log.info(this.name + ": onMounted");

        // store component handler instance in the DOM
        if (this.root) {
            /* tslint:disable-next-line */
            Reflect.set(this.root, "handler", this);
        }
        // this.state = currentState;
        // this.props = currentProps;
    }

    public onBeforeUpdate(currentProps: object, currentState: object): void {
        log.info(this.name + ": onBeforeUpdate");
    }

    public onUpdated(currentProps: object, currentState: object): void {
        log.info(this.name + ": onUpdated");
    }

    public onBeforeUnmount(currentProps: object, currentState: object): void {
        log.info(this.name + ": onBeforeUnmount");
    }

    public onUnmounted(currentProps: object, currentState: object): void {
        log.info(this.name + ": onUnmounted");
    }

    // $(selector: string): HTMLElement {
    //     return null;
    // }

    // $$(selector: string): [HTMLElement] {
    //     return null;
    // }
}
