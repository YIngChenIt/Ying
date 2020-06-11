<template>
  <div class="main-layout">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider width="280" v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :selectedKeys="[`${currentRouter}`]">
          <a-menu-item @click="loadMicro(item)" v-for="(item, index) in menus" :key="`${index}`">
            <a-icon type="user" />
            <span>{{ item.name }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <section class="cns-frame-wrapper">
            <router-view v-show="$route.name" />
            <section v-show="!$route.name" id="frame"></section>
          </section>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      menus: [
        {
          name: "介绍",
          path: "/"
        },
        {
          name: "基于Vue的可视化拖拽",
          path: "/vue-drag"
        },
        {
          name: "基于React的前端监控可视化",
          path: "/react-monitor"
        }
      ]
    };
  },
  methods: {
    loadMicro(item) {
      this.$router.push(item.path);
    }
  },
  computed: {
    currentRouter() {
      return this.menus.findIndex((item) => {
        return item.path === this.$route.path
      })
    }
  }
};
</script>
<style>
.main-layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.cns-frame-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
}

.ant-layout.ant-layout-has-sider {
  height: 100%;
}
</style>
