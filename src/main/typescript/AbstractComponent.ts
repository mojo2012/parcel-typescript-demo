import Vue from "vue";

export abstract class AbstractComponent {
    // [key: string]: any;

    constructor() {
    }

    handle(handler: (event: DocumentEvent) => void): any {
        const eventHandler = handler.bind(this);

        return (event: DocumentEvent) => {
            eventHandler(event);
        };
    }

}
