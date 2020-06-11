import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./public-path"

let instance = null

Vue.config.productionTip = false

function render() {
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}
