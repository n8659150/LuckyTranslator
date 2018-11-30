// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import AtComponents from 'at-ui'
import 'at-ui-style'
Vue.use(AtComponents)
import axios from "axios";
import App from "./App";

Vue.prototype.$http = axios;
Vue.use(AtComponents)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
