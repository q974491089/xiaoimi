<template>
  <div class="mySetting">
    <van-nav-bar
      title="个人中心"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
  
<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
    onClickRight () {
    },
  },
};
</script>

<style lang="scss" scoped>

</style>