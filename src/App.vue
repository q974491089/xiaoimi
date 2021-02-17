<template>
  <div id="app">
    <!-- <Header></Header> -->
    <!-- enter-active-class="animated bounceInRight"
    leave-active-class="animated bounceOutLeft"-->
    <!--   <router-link
      :to="{ name: 'login' }"
      v-if="!$route.meta.isShow"
      @click.native="removeuser"
      >退出登录</router-link
    >-->
    <!-- 在 link中 添加点击事件的时候 需要加.native -->
    <transition>
      <bottomNav v-if="!$route.meta.isShow"></bottomNav>
    </transition>

    <!--  <transition
      mode="out-in"
      name="custom-classes-transition"
      enter-active-class="animated bounceInRight"
      leave-active-class="animated bounceOutLeft"
    >-->
    <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
//
//底部自由导航组件
import bottomNav from "./components/footer/bottomnav";
import router from "./router/index";
// import Header from './components/header/Herder.vue';
// import { Button } from 'vant'

export default {
  /*  data() {
    return {
      isShow: true,
    };
  }, */
  methods: {
    removeuser () {
      localStorage.removeItem("username");
      this.$router.push("/login");
    },
  },
  watch: {
    $route () {
      // console.log(this.$route);
      this.isShow = this.$route.meta.isShow;
    },
  },
  name: "App",
  components: {
    bottomNav,
  },
  router,
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}
*,
:after,
:before {
  box-sizing: inherit;
}
user agent stylesheet div {
  display: block;
}
.app-shell .app-view-wrapper .app-view[data-v-bc186c1a] {
  background: #fff;
  color: #3c3c3c;
}

#app,
body,
html {
  font-size: 52.1111px;
  overflow-y: hidden;
}
* {
  margin: 0;
  padding: 0;
}
.v-leave-to {
  transform: translateY(10vh);
}
.v-leave-active {
  transition: all 0.8s;
}
/* .bounceInRight,.bounceOutLeft{
  transition:all 0.8s;
} */
/* :root {
  --animate-duration: 100ms;
  --animate-delay: 0.1s;
} */
#app {
  height: 100vh;
}
body {
  height: 100%;
}
.bottomNav{
  z-index: 100;
  overflow: hidden;
}
</style>
