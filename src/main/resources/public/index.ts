import Vue from "vue";
import "vue-class-component/hooks"; // import hooks type to enable auto-complete
import App from "../../typescript/App.vue";
import UILabel from "../../typescript/components/UILabel.vue";

Vue.config.productionTip = false;

Vue.component("ui-label", UILabel);

new Vue({
    render: (createElement) => createElement(App),
}).$mount("#root");
