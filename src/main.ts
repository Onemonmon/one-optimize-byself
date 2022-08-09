import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import ProComponents from "one-components-vue3";
// import "one-components-vue3/dist/style.css";
import "@/assets/css/index.css";
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";

createApp(App)
  .use(ElementPlus)
  // .use(ProComponents)
  .use(router)
  .mount("#app");
