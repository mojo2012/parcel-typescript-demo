import { RiotComponent } from "riot";
import { log } from "./util/Logger";

export abstract class AbstractComponent { // implements RiotComponent {
    [key: string]: any;
    protected className: string;
    protected props: any = {};
    protected state?: any = {};
    protected root: HTMLElement | undefined;
    protected name?: string;
    protected slots: Array<import("@riotjs/dom-bindings").SlotBindingData> | undefined;
    protected components?: { [key: string]: import("riot").RiotComponentShell<object, object>; };

    constructor() {
        //
    }

    public handle(handler: (event: DocumentEvent) => void): any {
        const eventHandler = handler.bind(this);

        return (event: DocumentEvent) => {
            eventHandler(event);
        };
    }

    public onBeforeMount?(currentProps: object, currentState: object): void {
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

    public onMounted?(currentProps: object, currentState: object): void {
        log.info(this.name + ": onMounted");

        // store component handler instance in the DOM
        /* tslint:disable-next-line */
        this.root["handler"] = this;
    }

    public onBeforeUpdate?(currentProps: object, currentState: object): void {
        log.info(this.name + ": onBeforeUpdate");
    }

    public onUpdated?(currentProps: object, currentState: object): void {
        log.info(this.name + ": onUpdated");
    }

    public onBeforeUnmount?(currentProps: object, currentState: object): void {
        log.info(this.name + ": onBeforeUnmount");
    }

    public onUnmounted?(currentProps: object, currentState: object): void {
        log.info(this.name + ": onUnmounted");
    }

    // $(selector: string): HTMLElement {
    //     return null;
    // }

    // $$(selector: string): [HTMLElement] {
    //     return null;
    // }
}
