import * as riot from "riot";
import App from "../../typescript/App.riot";
import UILabel from "../../typescript/components/UILabel.riot";
import UINavbar from "../../typescript/components/UINavbar.riot";

riot.register("app", App);
riot.register("ui-label", UILabel);
riot.register("ui-navbar", UINavbar);
riot.mount("app");
