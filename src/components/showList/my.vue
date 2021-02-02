<template>
  <div class="my">
    <div class="top-login">
      <div class="left-icon">
        <img src="../../../public/img/avatar.76a75b8f17.png" alt="" /><span
          >登录/注册</span
        >
      </div>
    </div>
    <van-cell title="我的订单" is-link value="全部订单" />
    <van-grid border="false">
      <van-grid-item text="文asd字">
        <van-icon
          class-prefix="icon"
          class="iconfont"
          name="qianbao"
          size="22"
        />
        <span>代付款</span>
      </van-grid-item>
      <van-grid-item text="文asd字">
        <van-icon
          class-prefix="icon"
          class="iconfont"
          name="daifahuo"
          size="22"
        />
        <span>待收货</span> </van-grid-item
      ><van-grid-item text="文asd字">
        <van-icon
          class-prefix="icon"
          class="iconfont"
          name="weixiu"
          size="22"
        />
        <span>退换修</span>
      </van-grid-item>
    </van-grid>
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
export default {};
</script>

<style lang="scss" scoped>
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
</style>