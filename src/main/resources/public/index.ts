import Vue from "vue";
import "vue-class-component/hooks"; // import hooks type to enable auto-complete
// import "../../../../node_modules/material-design-lite/material.min.css";
import App from "../../typescript/App.vue";
import UILabel from "../../typescript/components/UILabel.vue";
import UINavBar from "../../typescript/components/UINavBar.vue";

Vue.config.productionTip = false;

Vue.component("ui-label", UILabel);
Vue.component("ui-navbar", UINavBar);

const root = new Vue({
    el: "#root",
    render: (createElement) => createElement(App),
});
