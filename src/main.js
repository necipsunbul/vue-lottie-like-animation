import { createApp } from "vue";
import App from "./App.vue";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import Vue3Lottie from "vue3-lottie";
import "./assets/scss/app.scss";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
const app = createApp(App);

app.use(PerfectScrollbar);
app.use(Vue3Lottie);
app.mount("#app");
