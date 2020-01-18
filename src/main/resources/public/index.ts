import * as riot from "riot";
import App from "../../typescript/App.riot";

// const mountApp = component(App);

// const app = mountApp(document.getElementById("root"), { message: "Hello World" });

riot.register("app", App);
riot.mount("app");
