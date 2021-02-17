<template>
  <div class="bottom-nav">
    <van-tabbar v-model="active">
      <van-tabbar-item class="iconfont icon-shouye" route="true" to="/index"
        >首页
      </van-tabbar-item>
      <van-tabbar-item class="iconfont icon-fenlei" route="true" to="/find">
        分类</van-tabbar-item
      >

      <van-tabbar-item class="iconfont icon-xingqiu" route="true" to="/indextop">
        星球</van-tabbar-item
      >
      <van-tabbar-item
        class="iconfont icon-gouwuche"
        route="true"
        to="/setting"
      >
        购物车</van-tabbar-item
      >
      <van-tabbar-item class="iconfont icon-wode" route="true" to="/my">
        我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
//  引入底部导航栏
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  //   name: "bottom-nav",
  data() {
    return {
      active: 0,
    };
  },
  watch: {
    $route() {
      // console.log(this.$route);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "../../sass/bottom-list.scss";
.icon-shouye:before,
.icon-fenlei:before,
.icon-xingqiu:before,
.icon-gouwuche:before,
.icon-wode:before {
  font-size: 23px;
}
.van-tabbar-item--active{
  color: #ff6700;
}
.bottom-nav{
  overflow: hidden;
  height: 50px;
  z-index: 100;
  background: white;
}
</style>
