import * as riot from "riot";
import App from "../../typescript/App.riot";
import UILabel from "../../typescript/components/UILabel.riot";

riot.register("app", App);
riot.register("ui-label", UILabel);
riot.mount("app");
