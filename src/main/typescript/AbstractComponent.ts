import { RiotComponent } from "riot";
import { log } from "./util/Logger";

export abstract class AbstractComponent { // implements RiotComponent {
    [key: string]: any;
    className: string;
    props: any = {};
    state?: any = {};
    root: HTMLElement | undefined;
    name?: string;
    slots: Array<import("@riotjs/dom-bindings").SlotBindingData> | undefined;
    components?: { [key: string]: import("riot").RiotComponentShell<object, object>; };

    constructor() {
        //
    }

    handle(handler: (event: DocumentEvent) => void): any {
        const eventHandler = handler.bind(this);

        return (event: DocumentEvent) => {
            eventHandler(event);
        };
    }

    onBeforeMount?(currentProps: object, currentState: object): void {
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

    onMounted?(currentProps: object, currentState: object): void {
        log.info(this.name + ": onMounted");

        // store component handler instance in the DOM
        /* tslint:disable-next-line */
        this.root["handler"] = this;
    }

    onBeforeUpdate?(currentProps: object, currentState: object): void {
        log.info(this.name + ": onBeforeUpdate");
    }

    onUpdated?(currentProps: object, currentState: object): void {
        log.info(this.name + ": onUpdated");
    }

    onBeforeUnmount?(currentProps: object, currentState: object): void {
        log.info(this.name + ": onBeforeUnmount");
    }

    onUnmounted?(currentProps: object, currentState: object): void {
        log.info(this.name + ": onUnmounted");
    }

    // $(selector: string): HTMLElement {
    //     return null;
    // }

    // $$(selector: string): [HTMLElement] {
    //     return null;
    // }
}
