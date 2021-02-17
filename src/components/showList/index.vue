<template>
  <div class="index">
    <h1>这是一个首页页面</h1>
    <router-link to="/index/indextop">这是首页下面导航</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    // this.isLogin();
  
  },
  methods: {
    isLogin() {
      if (!localStorage.getItem("username")) {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>
</style>