<template>
  <div class="my">
    <div class="box" v-show="!isShow">
      <div class="top-login">
        <div class="left-icon">
          <img src="../../../public/img/avatar.76a75b8f17.png" alt />
          <span>登录/注册</span>
        </div>
      </div>
      <van-cell title="我的订单" is-link value="全部订单" />
      <van-grid>
        <van-grid-item text="文asd字">
          <van-icon class-prefix="icon" class="iconfont" name="qianbao" size="22" />
          <span>代付款</span>
        </van-grid-item>
        <van-grid-item text="文asd字">
          <van-icon class-prefix="icon" class="iconfont" name="daifahuo" size="22" />
          <span>待收货</span>
        </van-grid-item>
        <van-grid-item text="文asd字">
          <van-icon class-prefix="icon" class="iconfont" name="weixiu" size="22" />
          <span>退换修</span>
        </van-grid-item>
      </van-grid>
      <van-cell title="路由跳转" is-link to="index">
        <template #title>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huiyuan1" />
          </svg>
          <span class="custom-title">会员中心</span>
        </template>
      </van-cell>
      <van-cell title="路由跳转" is-link to="index">
        <template #title>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qianbao11" />
          </svg>
          <span class="custom-title">我的优惠</span>
        </template>
      </van-cell>
      <van-cell title="路由跳转" is-link to="index" style="margin-top:.307036rem">
        <template #title>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fuwu" />
          </svg>
          <span class="custom-title">服务中心</span>
        </template>
      </van-cell>
      <van-cell title="路由跳转" is-link to="index">
        <template #title>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangpu" />
          </svg>
          <span class="custom-title">小米之家</span>
        </template>
      </van-cell>
      <van-cell title="路由跳转" is-link to="index" style="margin-top:.307036rem">
        <template #title>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-F1" />
          </svg>
          <span class="custom-title">我的F码</span>
        </template>
      </van-cell>
      <van-cell title="路由跳转" is-link to="index">
        <template #title>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liwu" />
          </svg>
          <span class="custom-title">礼物码兑换</span>
        </template>
      </van-cell>
      <van-cell title="路由跳转" is-link to="/my/mySetting">
        <template #title>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-editor2" />
          </svg>
          <span class="custom-title">设置</span>
        </template>
      </van-cell>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <div class="loginout">退出登录</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup, Grid, GridItem, Icon } from "vant";

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
export default {
  data () {
    return {
      isShow: false,
    }
  },
  watch: {
    $route () {
      console.log(this.$route);
      this.isShow = this.$route.meta.isShow;
    },
  }
};
</script>

<style lang="scss" scoped>
.my {
  background: #f5f5f5;
  overflow-y: auto;
  height: 93vh;
}
.top-login {
  padding-top: 0.32rem;
  padding-bottom: 0.32rem;
  width: 100%;
  background: #f37d0f;
  .left-icon {
    display: flex;
    align-items: center;
  }
  img {
    margin-left: 0.319893rem;
    height: 0.96rem;
    margin-right: 0.160004rem;
    width: 0.96rem;
  }
  span {
    font-size: 0.24rem;
    color: white;
  }
}
.van-cell__title {
  font-size: 0.28rem;
  line-height: 0.627505rem;
}

.van-cell__value {
  color: black;
}
//三栏导航条
.van-grid {
  // background: #f37d0f;
  display: flex;
  justify-content: space-around;
  height: 88px;
  span {
    font-size: 0.22rem;
    margin-top: 0.095949rem;
  }
  /deep/.van-grid-item__content::after {
    border: none;
  }
  /deep/.van-grid-item {
    flex: 1;
  }
}
//下面竖排文字框
.icon {
  font-size: 0.575693rem;
  margin-left: 0.095949rem;
  line-height: 0.383795rem;
}
.van-cell {
  margin-top: 0.03838rem;
  span {
    // width: 50px;
    margin-left: 0.383795rem;
    font-size: 0.28rem;
    line-height: 0.627505rem;
    // margin-bottom: .191898rem;
    // padding-bottom: 10px;
    height: 0.690832rem;
    position: relative;
    top: -3px;
    box-sizing: border-box;
    display: inline-block;
  }
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter /* .fade-leave-active, 2.1.8 版本以下 */ {
  transform: translateY(-1.918977rem);
}
/* /deep/.van-cell:nth-of-type(3){
  margin-top: .383795rem;
} */
//底部隐藏的退出登录
.loginout {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .959488rem;
  font-size: .307036rem;
  text-align: center;
  line-height: .959488rem;
  background: #c4c3c3;
}
</style>