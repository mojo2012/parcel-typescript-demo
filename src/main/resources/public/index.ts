import * as riot from "riot";
import App from "../../typescript/App.riot";
import UIButton from "../../typescript/components/UIButton.riot";
import UIDrawer from "../../typescript/components/UIDrawer.riot";
import UILabel from "../../typescript/components/UILabel.riot";
import UINavbar from "../../typescript/components/UINavbar.riot";
import UINavbarItem from "../../typescript/components/UINavbarItem.riot";
import UINavbarItemGroup from "../../typescript/components/UINavbarItemGroup.riot";

riot.register("app", App);
riot.register("ui-label", UILabel);
riot.register("ui-button", UIButton);
riot.register("ui-navbar", UINavbar);
riot.register("ui-navbar-item", UINavbarItem);
riot.register("ui-navgroup", UINavbarItemGroup);
riot.register("ui-drawer", UIDrawer);
riot.mount("app");
