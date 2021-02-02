<template>
  <div class="find">
    <h1>这是一个寻找页面</h1>
    <p>{{ $store.state.count }}</p>
    <p>{{ isShow }}</p>
    <button @click="add(5)">增加</button>
    <button @click="reduce">减少在action上</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    isShow() {
      return this.$store.getters.isShow;
    },
  },
  methods: {
    ...mapMutations(["add"]),
    /*  add() {
        
      // this.$store.commit("add", 5);
    }, */
    reduce() {
      this.$store.dispatch("reduce", 55);
    },
  },
};
</script>

<style>
</style>