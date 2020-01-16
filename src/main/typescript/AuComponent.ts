import {PLATFORM} from "aurelia-pal";
import {Router, RouterConfiguration} from "aurelia-router";

export interface IAuComponent {

    created(owningView: any, myView: any): void;

    bind(bindingContext: object, overrideContext: object): void;

    attached(): void;

    detached(): void;

    unbind(): void;

    configureRouter(config: RouterConfiguration, router: Router): void;
}
