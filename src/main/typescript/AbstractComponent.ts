import Vue from "vue";

export abstract class AbstractComponent extends Vue {
    // [key: string]: any;

    constructor() {
        super();
    }

    handle(handler: (event: DocumentEvent) => void): any {
        const eventHandler = handler.bind(this);

        return (event: DocumentEvent) => {
            eventHandler(event);
        };
    }

}
