import Vue from 'vue';
import { Layout, Menu, Icon } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router';
import startQiankun from "./micro";


Vue.component(Layout.name, Layout);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Icon.name, Icon);

startQiankun();

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#main-app');
