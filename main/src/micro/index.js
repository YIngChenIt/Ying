import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { message } from "ant-design-vue";
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";

import apps from "./apps";

registerMicroApps(apps, {
  beforeLoad: (app) => {
    NProgress.start();
    return Promise.resolve();
  },
  afterMount: (app) => {
    NProgress.done();
    return Promise.resolve();
  },
});

addGlobalUncaughtErrorHandler((event) => {
  const { message: msg } = event;
  if (msg) {
    message.error(msg);
  }
});

export default start;
