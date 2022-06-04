import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import * as vClickOutside from 'v-click-outside-x';
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.vue";
import "./registerServiceWorker";
import "@/styles/styles.scss";

Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease-in",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.use(vClickOutside);

new Vue({
  created() {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated"
    });
  },
  render: h => h(App)
}).$mount("#app");
