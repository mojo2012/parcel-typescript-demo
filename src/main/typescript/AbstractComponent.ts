import { RiotComponent } from "riot";

export abstract class AbstractComponent { // implements RiotComponent {
    [key: string]: any;
    props: any = {};
    state?: any = {};
    root: HTMLElement;
    name?: string;
    slots: Array<import("@riotjs/dom-bindings").SlotBindingData>;
    components?: { [key: string]: import("riot").RiotComponentShell<object, object>; };

    constructor() {
        //
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

    // onBeforeMount?(currentProps: object, currentState: object): void {
    //     //
    // }

    // onMounted?(currentProps: object, currentState: object): void {
    //     //
    // }

    // onBeforeUpdate?(currentProps: object, currentState: object): void {
    //     //
    // }

    // onUpdated?(currentProps: object, currentState: object): void {
    //     //
    // }

    // onBeforeUnmount?(currentProps: object, currentState: object): void {
    //     this.props = currentProps;
    //     this.state = currentState;
    // }

    // onUnmounted?(currentProps: object, currentState: object): void {
    //     //
    // }

    // $(selector: string): HTMLElement {
    //     return null;
    // }

    // $$(selector: string): [HTMLElement] {
    //     return null;
    // }
}
