<template>
  <div class="home">
    <div class="title">基于qiankun的微前端项目合集(可视化、组件库、自动建站、音频视频直播、前端监控、基建...)</div>
    <br />
    <div @click="openUrl(item)" :key="index" v-for="(item, index) in projects" class="project-item">
      <div class="subtitle">{{ item.title }}</div>
      <div class="extitle">{{ item.subTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      projects: [
        {
          title: "主应用",
          subTitle: "基于vue + antd-vue + qiankun进行开发的微前端主应用",
          path: "/"
        },
        {
          title: "可视化拖拽建站",
          subTitle: "基于vue + antd-vue + koa实现的可视化拖拽建站工具",
          path: "/vue-drag"
        },
        {
          title: "前端监控可视化",
          subTitle: "基于react + antd + express实现的前端监控可视化工具",
          path: "/react-monitor"
        }
      ]
    };
  },
  methods: {
    openUrl(item) {
      this.$router.push(item.path)
    }
  }
};
</script>

<style>
.title {
  color: #0d1a26;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 8px;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  font-size: 30px;
  font-variant: tabular-nums;
  line-height: 38px;
}

.project-item {
  border: 1px solid #ebedf0;
  padding: 30px 20px 30px 20px;
  margin-bottom: 15px;
  cursor: pointer;
}

.project-item:hover {
  background: #effbff;
  -webkit-box-shadow: 0 15px 30px 0 #e8e8e8;
  box-shadow: 0 15px 30px 0 #e8e8e8;
}

.subtitle {
  color: #0d1a26;
  font-variant: tabular-nums;
  font-size: 20px;
  font-weight: 500;
  clear: both;
  font-family: "\5FAE\8F6F\96C5\9ED1";
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
  position: relative;
}

.project-item:hover .subtitle:after {
  width: 50px;
}

.subtitle::after {
    -webkit-transition: all .35s ease-out;
    transition: all .35s ease-out;
    content: "";
    position: absolute;
    background: #ff4e6a;
    width: 20px;
    height: 5px;
    bottom: -7px;
    left: 0;
    border-radius: 6px;
    -webkit-box-shadow: 0 2px 12px rgba(255,78,106,.85);
    box-shadow: 0 2px 12px rgba(255,78,106,.85);
}

.exttitle {
  font-family: "\5FAE\8F6F\96C5\9ED1";
}
</style>
