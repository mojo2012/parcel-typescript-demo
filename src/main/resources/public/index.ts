// import * as materialDesignLite from "material-design-lite";
import * as riot from "riot";
import "../../../../node_modules/material-components-web/dist/material-components-web.min.css";
import "../../../../node_modules/material-icons";
import App from "../../typescript/App.riot";
import UIButton from "../../typescript/components/UIButton.riot";
import UIDrawer from "../../typescript/components/UIDrawer.riot";
import UILabel from "../../typescript/components/UILabel.riot";
import UIList from "../../typescript/components/UIList.riot";
import UIListEntry from "../../typescript/components/UIListEntry.riot";
import UINavbar from "../../typescript/components/UINavbar.riot";
import UINavbarItem from "../../typescript/components/UINavbarItem.riot";
import UINavbarItemGroup from "../../typescript/components/UINavbarItemGroup.riot";

riot.register("app", App);
riot.register("ui-label", UILabel);
riot.register("ui-button", UIButton);
riot.register("ui-list", UIList);
riot.register("ui-list-entry", UIListEntry);
riot.register("ui-navbar", UINavbar);
riot.register("ui-navbar-item", UINavbarItem);
riot.register("ui-navgroup", UINavbarItemGroup);
riot.register("ui-drawer", UIDrawer);
riot.mount("app");
